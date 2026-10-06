import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProblemCard } from "@/components/ProblemCard";
import { getProblems, type Problem } from "@/data/problems";

export const Route = createFileRoute("/")({
  loader: (): { problems: Problem[] } => ({
    problems: getProblems(),
  }),
  head: () => ({
    meta: [
      { title: "Rezolvări PbInfo — Soluții C++" },
      {
        name: "description",
        content: "Soluții C++ pentru probleme PbInfo, afișate după ID.",
      },
    ],
  }),
  component: Home,
});

function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function Home() {
  const { problems } = Route.useLoaderData() as { problems: Problem[] };
  const [query, setQuery] = useState("");
  const backgroundProblems = problems.slice(0, 16);
  const backgroundLanes = Array.from({ length: 4 }, (_, laneIndex) =>
    backgroundProblems.slice(laneIndex * 4, laneIndex * 4 + 4),
  );

  const filtered = useMemo(() => {
    const q = normalizeSearch(query.trim());
    if (!q) return [];
    return problems.filter((p) => normalizeSearch(`${p.id} ${p.code}`).includes(q)).slice(0, 12);
  }, [problems, query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <header className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-border">
        <div className="problem-cloud" aria-hidden="true">
          {backgroundLanes.map((lane, laneIndex) => {
            const laneItems = [...lane, ...lane];
            return (
              <div className="problem-cloud__lane" key={laneIndex}>
                {laneItems.map((problem, itemIndex) => {
                  const snippet =
                    problem.code
                      .split("\n")
                      .find(
                        (line) =>
                          line.trim() &&
                          !line.trim().startsWith("#") &&
                          !line.trim().startsWith("using") &&
                          !/^(?:int|void)\s+main\b/.test(line.trim()) &&
                          !/^(?:return\b|[{}])/.test(line.trim()),
                      )
                      ?.trim() ?? "int main()";

                  return (
                    <div className="problem-cloud__item" key={`${problem.id}-${itemIndex}`}>
                      <span>#{problem.id}</span>
                      <code>{snippet}</code>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background via-background/65 to-background/15" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-background/15" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-6 py-16 lg:py-24">
          <div className="max-w-2xl animate-reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
              Pentru clasele 9–12
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl">
              Rezolvări <span className="text-primary">probleme si exerciții </span>la informatică
            </h1>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Soluții C++ pentru problemele de pe pbinfo.ro, afișate după ID.
            </p>

            <div className="relative max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Caută după ID sau cod..."
                aria-label="Caută soluții după ID sau cod"
                className="w-full rounded-lg border border-border bg-accent/30 py-4 pl-11 pr-4 font-medium text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Link
              to="/categorii"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent"
            >
              Vezi categoriile →
            </Link>
          </div>
        </div>
      </header>

      {query.trim() && (
        <main className="mx-auto max-w-7xl px-6 py-12">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-accent/20 px-6 py-16 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Nicio soluție nu corespunde căutării.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-muted-foreground">
                {filtered.length === 12 ? "Primele 12 rezultate" : `${filtered.length} rezultate`}
              </p>
              <div className="grid animate-reveal grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
                {filtered.map((problem) => (
                  <ProblemCard key={problem.id} problem={problem} />
                ))}
              </div>
            </>
          )}
        </main>
      )}

      <Footer />
    </div>
  );
}
