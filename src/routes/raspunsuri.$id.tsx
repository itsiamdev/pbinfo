import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CodeBlock } from "@/components/CodeBlock";
import { getProblems, type Problem } from "@/data/problems";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/raspunsuri/$id")({
  loader: ({ params }): { problem: Problem } => {
    const id = Number(params.id);
    const problem = getProblems().find((candidate) => candidate.id === id);
    if (!problem) throw notFound();

    return { problem };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `#${loaderData.problem.id} — Soluție` },
          {
            name: "description",
            content: `Soluție C++ pentru problema #${loaderData.problem.id}.`,
          },
        ]
      : [{ title: "Soluție" }],
  }),
  component: AnswerPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold">Problema nu a fost găsită</h1>
        <Link to="/" className="mt-6 inline-block text-primary hover:underline">
          ← Înapoi la lista de soluții
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

      <main className="mx-auto max-w-5xl px-6 py-12">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Înapoi la soluții
        </Link>

        <article className="space-y-5">
          <h1 className="font-mono text-2xl font-bold text-primary">#{problem.id}</h1>
          {problem.code.trim() ? (
            <CodeBlock code={problem.code} />
          ) : (
            <p className="rounded-lg border border-dashed border-border p-5 text-sm text-muted-foreground">
              Nu există o soluție pentru această problemă.
            </p>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
