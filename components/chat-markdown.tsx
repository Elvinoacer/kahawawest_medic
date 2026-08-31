"use client";

import type { ReactNode } from "react";

/**
 * Lightweight Markdown renderer for chat bubbles.
 * Supports: paragraphs, line breaks, **bold**, *italic*, `code`,
 * links, unordered/ordered lists, and simple headings.
 */
export default function ChatMarkdown({
  content,
  variant = "assistant",
}: {
  content: string;
  variant?: "assistant" | "user";
}) {
  const isUser = variant === "user";
  const blocks = splitBlocks(content);

  return (
    <div
      className={`chat-md space-y-2 ${isUser ? "chat-md-user" : "chat-md-assistant"}`}
    >
      {blocks.map((block, i) => (
        <Block key={i} block={block} isUser={isUser} />
      ))}
    </div>
  );
}

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "h"; level: 1 | 2 | 3; text: string }
  | { type: "code"; text: string };

function splitBlocks(src: string): Block[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // fenced code
    if (line.trim().startsWith("```")) {
      const codeLines: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i += 1;
      }
      i += 1; // skip closing fence
      blocks.push({ type: "code", text: codeLines.join("\n") });
      continue;
    }

    // blank → skip (paragraph spacing handled by space-y)
    if (!line.trim()) {
      i += 1;
      continue;
    }

    // heading
    const h = /^(#{1,3})\s+(.+)$/.exec(line);
    if (h) {
      blocks.push({
        type: "h",
        level: h[1].length as 1 | 2 | 3,
        text: h[2],
      });
      i += 1;
      continue;
    }

    // unordered list
    if (/^\s*[-*•]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*•]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*•]\s+/, ""));
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // ordered list
    if (/^\s*\d+[.)]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+[.)]\s+/, ""));
        i += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // paragraph (consume consecutive non-blank, non-special lines)
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("```") &&
      !/^#{1,3}\s+/.test(lines[i]) &&
      !/^\s*[-*•]\s+/.test(lines[i]) &&
      !/^\s*\d+[.)]\s+/.test(lines[i])
    ) {
      para.push(lines[i]);
      i += 1;
    }
    blocks.push({ type: "p", text: para.join("\n") });
  }

  return blocks;
}

function Block({ block, isUser }: { block: Block; isUser: boolean }) {
  if (block.type === "code") {
    return (
      <pre
        className={`overflow-x-auto rounded-xl px-3 py-2 text-[12px] leading-snug ${
          isUser ? "bg-black/20 text-white/95" : "bg-[#eef3ef] text-[#1a2e27]"
        }`}
      >
        <code>{block.text}</code>
      </pre>
    );
  }

  if (block.type === "h") {
    const size =
      block.level === 1
        ? "text-[15px]"
        : block.level === 2
          ? "text-[14px]"
          : "text-[13.5px]";
    return (
      <p className={`${size} font-semibold leading-snug`}>
        {renderInline(block.text, isUser)}
      </p>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-1 pl-4">
        {block.items.map((item, idx) => (
          <li key={idx}>{renderInline(item, isUser)}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "ol") {
    return (
      <ol className="list-decimal space-y-1 pl-4">
        {block.items.map((item, idx) => (
          <li key={idx}>{renderInline(item, isUser)}</li>
        ))}
      </ol>
    );
  }

  // paragraph — preserve soft line breaks
  const parts = block.text.split("\n");
  return (
    <p className="leading-relaxed">
      {parts.map((part, idx) => (
        <span key={idx}>
          {idx > 0 && <br />}
          {renderInline(part, isUser)}
        </span>
      ))}
    </p>
  );
}

function renderInline(text: string, isUser: boolean): ReactNode[] {
  // Order: code spans, links, bold, italic
  const pattern =
    /(`[^`]+`)|(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)|(__[^_]+__)|(\*[^*]+\*)|(_[^_]+_)/g;

  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];

    if (token.startsWith("`")) {
      nodes.push(
        <code
          key={key++}
          className={`rounded px-1 py-0.5 text-[12px] ${
            isUser ? "bg-black/20" : "bg-[#e8f0eb] text-[#0a654c]"
          }`}
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("[")) {
      const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (m) {
        const href = m[2];
        const safe =
          href.startsWith("http://") ||
          href.startsWith("https://") ||
          href.startsWith("tel:") ||
          href.startsWith("mailto:") ||
          href.startsWith("#");
        if (safe) {
          nodes.push(
            <a
              key={key++}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`font-semibold underline underline-offset-2 ${
                isUser ? "text-gold" : "text-[#0a654c]"
              }`}
            >
              {m[1]}
            </a>
          );
        } else {
          nodes.push(m[1]);
        }
      }
    } else if (token.startsWith("**") || token.startsWith("__")) {
      nodes.push(
        <strong key={key++} className="font-semibold">
          {token.slice(2, -2)}
        </strong>
      );
    } else {
      nodes.push(
        <em key={key++} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }

    last = match.index + token.length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return nodes;
}
