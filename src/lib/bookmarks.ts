import { useEffect, useState } from "react";

const KEY = "pbsolve-bookmarks";

function read(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    return [];
  }
}

export function useBookmarks() {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    setIds(read());
  }, []);

  const toggle = (id: number) => {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  return { ids, toggle, has: (id: number) => ids.includes(id) };
}
