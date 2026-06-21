import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CodeBlock } from "@/components/CodeBlock";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { getProblems, type Problem } from "@/data/problems";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/raspunsuri/$id")({
  loader: ({ params }): { problem: Problem } => {
    const id = Number(params.id);
    const problems = getProblems();
    const problem = problems.find((candidate) => candidate.id === id);
    if (!problem) throw notFound();

    return { problem };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `#${loaderData.problem.id} ${loaderData.problem.title} — Răspuns` },
          {
            name: "description",
            content: `Răspuns și soluție C++ pentru problema ${loaderData.problem.title}.`,
          },
        ]
      : [{ title: "Răspuns" }],
  }),
  component: AnswerPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold">Problema nu a fost găsită</h1>
        <Link to="/" className="mt-6 inline-block text-primary hover:underline">
          ← Înapoi la lista de probleme
        </Link>
      </div>
    </div>
  ),
});

function AnswerPage() {
  const { problem } = Route.useLoaderData() as { problem: Problem };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="mx-auto max-w-5xl px-6 py-12">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Înapoi la probleme
        </Link>

        <header className="mb-10 border-b border-border pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-bold text-primary">#{problem.id}</span>
            <DifficultyBadge difficulty={problem.difficulty} />
            <span className="inline-flex items-center gap-1 rounded bg-accent px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              <Tag className="size-3" /> {problem.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-accent px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
              <Clock className="size-3" /> {problem.complexity}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{problem.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">Răspuns la această problemă</p>
        </header>

        <section className="mb-12">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Enunț
          </h2>
          <div className="rounded-xl border border-border bg-accent/30 p-6 text-base leading-relaxed text-foreground">
            {problem.statement}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Explicație pas cu pas
          </h2>
          <ol className="space-y-4">
            {problem.explanation.map((step: string, i: number) => (
              <li key={i} className="flex gap-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <p className="pt-0.5 text-base leading-relaxed text-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Soluție C++
            </h2>
            <span className="font-mono text-xs text-muted-foreground">
              Complexitate: <span className="text-foreground">{problem.complexity}</span>
            </span>
          </div>
          <CodeBlock code={problem.code} />
        </section>
      </article>
      <Footer />
    </div>
  );
}
