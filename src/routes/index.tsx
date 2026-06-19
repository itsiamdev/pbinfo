import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProblemCard } from "@/components/ProblemCard";
import { CodeBlock } from "@/components/CodeBlock";
import type { Difficulty } from "@/data/problems";
import { getProblems } from "@/lib/problems.functions";

export const Route = createFileRoute("/")({
  loader: async () => ({
    problems: await getProblems(),
  }),
  head: () => ({
    meta: [
      { title: "Rezolvări PbInfo — Soluții C++ explicate" },
      {
        name: "description",
        content:
          "Caută probleme de pe pbinfo.ro și vezi rezolvări C++ explicate pas cu pas pentru elevii de liceu.",
      },
    ],
  }),
  component: Home,
});

const HERO_CODE = `#include <iostream>
using namespace std;

// Problema #102 — Suma Cifrelor
int main() {
    long long n, s = 0;
    cin >> n;

    while (n > 0) {
        s += n % 10;
        n /= 10;
    }

    cout << s;
    return 0;
}`;

function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function Home() {
  const { problems } = Route.useLoaderData();
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [category, setCategory] = useState<string>("Toate");
  const categories = useMemo(
    () => ["Toate", ...problems.map((problem) => problem.category)] as const,
    [problems],
  );
  const uniqueCategories = useMemo(
    () => [...new Set(categories)] as readonly (string | "Toate")[],
    [categories],
  );

  const filtered = useMemo(() => {
    const q = normalizeSearch(query.trim());
    return problems.filter((p) => {
      if (difficulty !== "all" && p.difficulty !== difficulty) return false;
      if (category !== "Toate" && p.category !== category) return false;
      if (!q) return true;
      return normalizeSearch(
        `${p.id} ${p.title} ${p.slug} ${p.category} ${p.statement} ${p.code}`,
      ).includes(q);
    });
  }, [problems, query, difficulty, category]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <header className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="border-border px-6 py-16 lg:border-r lg:py-24">
            <div className="max-w-xl animate-reveal">
              <div className="mb-6 inline-flex items-center gap-2 rounded bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                Pentru clasele 9–12
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl">
                Rezolvări <span className="text-primary">probleme si exerciții </span>la informatică
              </h1>
              <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
                prettier/prettier Rezolvări C++ optimizate pentru problemele de pe
                pbinfo.ro,explicate linie cu linie pentru elevii de liceu.
              </p>

              <div className="relative max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Caută după ID, titlu, categorie sau cod..."
                  className="w-full rounded-lg border border-border bg-accent/30 py-4 pl-11 pr-4 font-medium text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-accent/30 p-6 lg:p-12">
            <div className="w-full max-w-2xl animate-reveal [animation-delay:200ms]">
              <CodeBlock code={HERO_CODE} />
            </div>
          </div>
        </div>
      </header>

      {/* Filters & Grid */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mr-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Dificultate:
            </span>
            {(["all", "usor", "mediu", "greu"] as const).map((d) => {
              const labels = {
                all: { label: "Toate", on: "border-foreground bg-foreground text-background" },
                usor: {
                  label: "Ușor",
                  on: "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300",
                },
                mediu: {
                  label: "Mediu",
                  on: "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300",
                },
                greu: {
                  label: "Greu",
                  on: "border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300",
                },
              };
              const active = difficulty === d;
              return (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-all ${
                    active
                      ? labels[d].on
                      : "border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {labels[d].label.toUpperCase()}
                </button>
              );
            })}
          </div>

          <div className="-mx-1 flex items-center gap-1 overflow-x-auto pb-2">
            {uniqueCategories.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`shrink-0 rounded px-3 py-1 text-xs font-medium transition-colors ${
                    active
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-accent/20 px-6 py-20 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Nicio problemă nu corespunde criteriilor.
            </p>
          </div>
        ) : (
          <div className="grid animate-reveal grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProblemCard key={p.id} problem={p} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/categorii"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Vezi toate categoriile →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-extrabold tracking-tight">
            REZOLVĂRI <span className="text-primary">PBINFO</span>
          </span>
          <span className="text-xs text-muted-foreground">
            Platformă educațională pentru elevii de liceu • {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <Link to="/categorii" className="hover:text-foreground">
            Categorii
          </Link>
          <Link to="/raspunsuri" className="hover:text-foreground">
            Răspunsuri
          </Link>
          <a href="#" className="hover:text-foreground">
            Termeni
          </a>
        </div>
      </div>
    </footer>
  );
}
