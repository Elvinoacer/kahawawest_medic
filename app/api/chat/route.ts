import { buildSystemPrompt } from "@/lib/chat-knowledge";

// Node runtime is more reliable for server env vars on Vercel than Edge.
export const runtime = "nodejs";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY?.trim();
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error:
            "Chat is not configured yet (missing GROQ_API_KEY). Please call 0798 319936.",
          code: "missing_api_key",
        }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    const model = process.env.GROQ_MODEL?.trim() || "openai/gpt-oss-20b";

    const body = await req.json();
    const messages = (body?.messages ?? []) as ChatMessage[];

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

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
      console.error("Groq error", groqRes.status, model, errText);

      let code = "groq_error";
      let error =
        "I couldn’t reach the assistant just now. Please try again or call 0798 319936.";

      if (groqRes.status === 401 || groqRes.status === 403) {
        code = "invalid_api_key";
        error =
          "Chat API key was rejected. Check GROQ_API_KEY in Vercel, then redeploy.";
      } else if (groqRes.status === 404 || groqRes.status === 400) {
        code = "bad_model_or_request";
        // Surface a short hint without leaking secrets
        let hint = "";
        try {
          const parsed = JSON.parse(errText);
          hint = parsed?.error?.message ? ` (${parsed.error.message})` : "";
        } catch {
          /* ignore */
        }
        error = `Chat model request failed${hint}. Confirm GROQ_MODEL is a valid Groq id (e.g. openai/gpt-oss-20b).`;
      } else if (groqRes.status === 429) {
        code = "rate_limited";
        error = "The assistant is busy right now. Please try again in a moment.";
      }

      return new Response(JSON.stringify({ error, code, status: groqRes.status }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

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
        code: "server_error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
