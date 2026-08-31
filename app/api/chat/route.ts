import { buildSystemPrompt } from "@/lib/chat-knowledge";

export const runtime = "edge";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "Chat is temporarily unavailable. Please call 0798 319936.",
        }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    const model =
      process.env.GROQ_MODEL?.trim() || "openai/gpt-oss-20b";

    const body = await req.json();
    const messages = (body?.messages ?? []) as ChatMessage[];

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Keep only the last ~12 turns to control cost / context
    const recent = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .slice(-12)
      .map((m) => ({
        role: m.role,
        content: String(m.content ?? "").slice(0, 4000),
      }));

    const groqMessages: ChatMessage[] = [
      { role: "system", content: buildSystemPrompt() },
      ...recent,
    ];

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: groqMessages,
          temperature: 0.45,
          max_tokens: 900,
          stream: true,
        }),
      }
    );

    if (!groqRes.ok) {
      const errText = await groqRes.text().catch(() => "");
      console.error("Groq error", groqRes.status, errText);
      return new Response(
        JSON.stringify({
          error:
            "I couldn’t reach the assistant just now. Please try again or call 0798 319936.",
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    // Stream OpenAI-compatible SSE through to the client
    return new Response(groqRes.body, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Chat route error", err);
    return new Response(
      JSON.stringify({
        error: "Something went wrong. Please call 0798 319936 for help.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
