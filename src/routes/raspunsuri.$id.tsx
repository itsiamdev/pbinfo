import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { useState } from "react";
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
  const [selectedAnswer, setSelectedAnswer] = useState<{
    problemId: number;
    optionIndex: number;
  } | null>(null);
  const selectedOption = selectedAnswer?.problemId === problem.id ? selectedAnswer.optionIndex : null;

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

        {problem.quiz && (
          <section aria-labelledby="quiz-heading" className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h2
                id="quiz-heading"
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
              >
                Verifică-ți răspunsul
              </h2>
              <span className="rounded bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase text-primary">
                Exemplu demonstrativ
              </span>
            </div>
            <fieldset className="space-y-3">
              <legend className="mb-3 text-base font-medium text-foreground">
                {problem.quiz.prompt}
              </legend>
              {problem.quiz.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === problem.quiz?.correctIndex;
                const showResult = selectedOption !== null;
                const optionStyle = showResult && isCorrect
                  ? "border-emerald-600 bg-emerald-500/10"
                  : showResult && isSelected
                    ? "border-destructive bg-destructive/10"
                    : "border-border hover:bg-accent/50";

                return (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm transition-colors ${optionStyle}`}
                  >
                    <input
                      type="radio"
                      name={`quiz-${problem.id}`}
                      value={index}
                      checked={isSelected}
                      onChange={() => setSelectedAnswer({ problemId: problem.id, optionIndex: index })}
                      className="size-4 accent-primary"
                    />
                    <span>{String.fromCharCode(65 + index)}. {option}</span>
                  </label>
                );
              })}
            </fieldset>
            {selectedOption !== null && (
              <p role="status" className="mt-3 text-sm font-medium text-foreground">
                {selectedOption === problem.quiz.correctIndex
                  ? "Corect!"
                  : `Nu chiar. Răspunsul corect este ${String.fromCharCode(65 + problem.quiz.correctIndex)}. ${problem.quiz.options[problem.quiz.correctIndex]}.`}
              </p>
            )}
          </section>
        )}

        {problem.explanation.length > 0 && (
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
        )}

        <section className="mb-12">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Soluție C++
            </h2>
            <span className="font-mono text-xs text-muted-foreground">
              Complexitate: <span className="text-foreground">{problem.complexity}</span>
            </span>
          </div>
          {problem.code.trim() ? (
            <CodeBlock code={problem.code} />
          ) : (
            <p className="rounded-lg border border-dashed border-border p-5 text-sm text-muted-foreground">
              Fișierul de rezolvare pentru această problemă este gol.
            </p>
          )}
        </section>
      </article>
      <Footer />
    </div>
  );
}
