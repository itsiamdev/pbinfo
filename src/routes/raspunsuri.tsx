import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CATEGORIES } from "@/data/problems";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { getProblems } from "@/lib/problems.functions";

export const Route = createFileRoute("/raspunsuri")({
  loader: async () => ({
    problems: await getProblems(),
  }),
  head: () => ({
    meta: [
      { title: "Răspunsuri — Rezolvări PbInfo" },
      {
        name: "description",
        content:
          "Explorează răspunsurile la probleme C++ pe categorii: vectori, matrice, sortări, recursivitate, grafuri și multe altele.",
      },
    ],
  }),
  component: RăspunsuriPage,
});

function RăspunsuriPage() {
  const { problems } = Route.useLoaderData();
  const categories = CATEGORIES.map((cat) => ({
    ...cat,
    problems: problems.filter((problem) => problem.category === cat.name),
  })).filter((cat) => cat.problems.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
            Algoritmi
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Răspunsuri la probleme
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Răspunsuri organizate pe tematică, de la noțiuni de bază la algoritmi avansați de
            bacalaureat și olimpiadă.
          </p>
        </div>
      </header>
    </div>
  );
}
