import { Fragment, type ReactNode } from "react";

const KEYWORDS = new Set([
  "if", "else", "while", "for", "do", "return", "break", "continue",
  "switch", "case", "default", "struct", "class", "public", "private",
  "protected", "new", "delete", "this", "true", "false", "nullptr",
  "using", "namespace", "template", "typename", "const", "static",
  "auto", "sizeof",
]);

const TYPES = new Set([
  "int", "long", "short", "char", "bool", "float", "double", "void",
  "string", "vector", "queue", "stack", "map", "set", "pair", "size_t",
  "unsigned", "signed",
]);

type Token = { kind: string; text: string };

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < code.length) {
    const c = code[i];

    // line comment
    if (c === "/" && code[i + 1] === "/") {
      const end = code.indexOf("\n", i);
      const stop = end === -1 ? code.length : end;
      tokens.push({ kind: "com", text: code.slice(i, stop) });
      i = stop;
      continue;
    }
    // block comment
    if (c === "/" && code[i + 1] === "*") {
      const end = code.indexOf("*/", i + 2);
      const stop = end === -1 ? code.length : end + 2;
      tokens.push({ kind: "com", text: code.slice(i, stop) });
      i = stop;
      continue;
    }
    // preprocessor
    if (c === "#") {
      const end = code.indexOf("\n", i);
      const stop = end === -1 ? code.length : end;
      tokens.push({ kind: "pre", text: code.slice(i, stop) });
      i = stop;
      continue;
    }
    // string
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < code.length && code[j] !== c) {
        if (code[j] === "\\") j++;
        j++;
      }
      j = Math.min(j + 1, code.length);
      tokens.push({ kind: "str", text: code.slice(i, j) });
      i = j;
      continue;
    }
    // number
    if (/[0-9]/.test(c)) {
      let j = i;
      while (j < code.length && /[0-9a-fA-FxLlUu.]/.test(code[j])) j++;
      tokens.push({ kind: "num", text: code.slice(i, j) });
      i = j;
      continue;
    }
    // identifier / keyword
    if (/[A-Za-z_]/.test(c)) {
      let j = i;
      while (j < code.length && /[A-Za-z0-9_]/.test(code[j])) j++;
      const word = code.slice(i, j);
      let kind = "id";
      if (KEYWORDS.has(word)) kind = "kw";
      else if (TYPES.has(word)) kind = "type";
      else if (code[j] === "(") kind = "fn";
      tokens.push({ kind, text: word });
      i = j;
      continue;
    }
    // default char
    tokens.push({ kind: "plain", text: c });
    i++;
  }
  return tokens;
}

export function HighlightCpp({ code }: { code: string }): ReactNode {
  const tokens = tokenize(code);
  return (
    <>
      {tokens.map((t, idx) => {
        if (t.kind === "plain" || t.kind === "id") {
          return <Fragment key={idx}>{t.text}</Fragment>;
        }
        return (
          <span key={idx} className={`tok-${t.kind}`}>
            {t.text}
          </span>
        );
      })}
    </>
  );
}
