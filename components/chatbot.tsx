"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CHAT_QUICK_REPLIES, CHAT_WELCOME } from "@/lib/chat-knowledge";
import { site } from "@/lib/site";

type Role = "user" | "assistant";

type Message = {
  id: string;
  role: Role;
  content: string;
};

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", role: "assistant", content: CHAT_WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [showHints, setShowHints] = useState(true);
  const [unread, setUnread] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, busy, open]);

  useEffect(() => {
    if (open) {
      setUnread(false);
      const t = setTimeout(() => inputRef.current?.focus(), 180);
      return () => clearTimeout(t);
    }
  }, [open]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || busy) return;

      setShowHints(false);
      setInput("");
      const userMsg: Message = { id: uid(), role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setBusy(true);

      const history = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const assistantId = uid();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
        });

        if (!res.ok) {
          let errMsg =
            "I couldn’t reply just now. Please try again or call 0798 319936.";
          try {
            const data = await res.json();
            if (data?.error) errMsg = data.error;
          } catch {
            /* ignore */
          }
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: errMsg } : m
            )
          );
          if (!open) setUnread(true);
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("No stream");

        const decoder = new TextDecoder();
        let buffer = "";
        let full = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine.startsWith("data:")) continue;
            const data = trimmedLine.slice(5).trim();
            if (data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data);
              const delta = parsed?.choices?.[0]?.delta?.content;
              if (typeof delta === "string" && delta) {
                full += delta;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId ? { ...m, content: full } : m
                  )
                );
              }
            } catch {
              /* partial JSON — ignore */
            }
          }
        }

        if (!full) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    content:
                      "I didn’t catch that. Could you rephrase, or call us on 0798 319936?",
                  }
                : m
            )
          );
        }
        if (!open) setUnread(true);
      } catch {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content:
                    "Connection hiccup. Please try again, or call 0798 319936.",
                }
              : m
          )
        );
        if (!open) setUnread(true);
      } finally {
        setBusy(false);
      }
    },
    [busy, messages, open]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(input);
    }
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat with Kahawa Care"}
        className={`chat-launcher fixed bottom-5 right-5 z-[80] flex h-[60px] w-[60px] items-center justify-center rounded-full text-white shadow-[0_12px_32px_rgba(12,59,46,0.35)] transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold sm:bottom-7 sm:right-7 ${
          open
            ? "bg-forest-deep rotate-0"
            : "bg-gradient-to-br from-[#0b7657] via-[#0a654c] to-[#083d30]"
        }`}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <>
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10.5h8M8 14h5M7 19.5l-2.2 2.1c-.5.5-1.3.1-1.3-.6V6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 18 18H7z"
              />
            </svg>
            {unread && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-gold" />
              </span>
            )}
            <span className="chat-launcher-ring absolute inset-0 rounded-full" aria-hidden />
          </>
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-[88px] right-4 z-[80] flex w-[min(100vw-1.5rem,400px)] flex-col overflow-hidden rounded-[28px] border border-white/70 bg-[#faf8f3]/96 shadow-[0_28px_80px_rgba(8,43,33,0.28)] backdrop-blur-2xl transition-all duration-300 sm:bottom-[100px] sm:right-7 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-[0.96] opacity-0"
        }`}
        style={{ height: "min(640px, calc(100dvh - 120px))" }}
        role="dialog"
        aria-label="Kahawa Care chatbot"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#0c3b2e] via-[#0a654c] to-[#14553f] px-5 pb-4 pt-5 text-cream">
          <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-gold/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 shadow-inner ring-1 ring-white/25">
                <span className="text-[22px]" aria-hidden>
                  🩺
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#0a654c] bg-[#3dcf8a]" />
              </div>
              <div>
                <p className="font-display text-[17px] font-semibold tracking-tight">
                  Kahawa Care
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[11.5px] text-cream/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3dcf8a]" />
                  Online · usually replies in seconds
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white/10 p-2 text-cream/90 transition hover:bg-white/20"
              aria-label="Close chat"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <p className="relative mt-3 text-[12px] leading-relaxed text-cream/70">
            Ask about services, specialist clinics, hours, location & booking.
            For emergencies call{" "}
            <a href={site.phone.href} className="font-semibold text-gold underline-offset-2 hover:underline">
              {site.phone.display}
            </a>
            .
          </p>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          className="flex-1 space-y-3.5 overflow-y-auto px-4 py-4"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[88%] rounded-[20px] px-3.5 py-2.5 text-[13.5px] leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "rounded-br-md bg-[#0a654c] text-white"
                    : "rounded-bl-md border border-[#e6ddca]/80 bg-white text-[#1a2e27]"
                }`}
              >
                {m.content ? (
                  <div className="whitespace-pre-wrap">{m.content}</div>
                ) : (
                  <span className="inline-flex items-center gap-1.5 py-1">
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-[#2b916f]" />
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-[#2b916f] [animation-delay:0.15s]" />
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-[#2b916f] [animation-delay:0.3s]" />
                  </span>
                )}
              </div>
            </div>
          ))}

          {showHints && messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {CHAT_QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  disabled={busy}
                  onClick={() => void send(q)}
                  className="rounded-full border border-[#d4e1d9] bg-white/90 px-3 py-1.5 text-[12px] font-medium text-[#14553f] shadow-sm transition hover:-translate-y-0.5 hover:border-[#237a57] hover:bg-[#eef7f2]"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="shrink-0 border-t border-[#e6ddca]/90 bg-white/70 px-3 py-3 backdrop-blur-md">
          <div className="flex items-end gap-2 rounded-[18px] border border-[#dce5df] bg-white p-1.5 shadow-[0_4px_16px_rgba(12,59,46,0.06)] focus-within:border-[#237a57] focus-within:ring-4 focus-within:ring-[#237a57]/15">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask anything about the hospital…"
              disabled={busy}
              className="max-h-[120px] min-h-[42px] flex-1 resize-none bg-transparent px-2.5 py-2.5 text-[14px] text-[#1a2e27] outline-none placeholder:text-[#9aa89f]"
            />
            <button
              type="button"
              onClick={() => void send(input)}
              disabled={busy || !input.trim()}
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-[14px] bg-[#0a654c] text-white transition hover:bg-[#08543f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-center text-[10.5px] text-[#8a968f]">
            AI assistant · not a substitute for clinical care ·{" "}
            <a href={site.phone.href} className="font-medium text-[#14553f] hover:underline">
              Call {site.phone.display}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
