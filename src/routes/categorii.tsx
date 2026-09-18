import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import {
  CATEGORY_BY_CLASS,
  CATEGORIES,
  CLASS_GROUPS,
  getProblems,
  type Problem,
} from "@/data/problems";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/categorii")({
  loader: (): { problems: Problem[] } => ({
    problems: getProblems(),
  }),
  head: () => ({
    meta: [
      { title: "Categorii — Rezolvări PbInfo" },
      {
        name: "description",
        content:
          "Explorează probleme C++ pe categorii: vectori, matrice, sortări, recursivitate, grafuri și multe altele.",
      },
    ],
  }),
  component: CategoriiPage,
});

function CategoriiPage() {
  const { problems } = Route.useLoaderData() as { problems: Problem[] };
  const groupedCategories = CLASS_GROUPS.map((group) => ({
    ...group,
    categories: CATEGORIES.filter((cat) => CATEGORY_BY_CLASS[group.name].includes(cat.name)).map(
      (cat) => ({
        ...cat,
        problems: problems.filter((problem) => problem.category === cat.name),
      }),
    ),
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
            Algoritmi
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Categorii de probleme
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Probleme organizate pe tematică, de la noțiuni de bază la algoritmi avansați de
            bacalaureat și olimpiadă.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-12">
        {groupedCategories.map((group) => (
          <section key={group.name} className="space-y-5">
            <div className="border-b border-border pb-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{group.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {group.categories.map((cat) => {
                const totalProblems = cat.problems.length;
                return (
                  <section key={cat.name} className="bg-background p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-foreground">{cat.name}</h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {totalProblems} probleme
                      </span>
                    </div>
                    <p className="mb-5 text-sm text-muted-foreground">{cat.description}</p>
                    <ul className="space-y-2">
                      {cat.problems.slice(0, 4).map((p) => (
                        <li key={p.id}>
                          <Link
                            to="/problema/$id"
                            params={{ id: String(p.id) }}
                            className="flex items-center justify-between gap-3 rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors hover:bg-accent/50"
                          >
                            <div className="flex min-w-0 items-center gap-3">
                              <span className="font-mono text-xs text-primary">#{p.id}</span>
                              <span className="truncate font-medium text-foreground">{p.title}</span>
                            </div>
                            <DifficultyBadge difficulty={p.difficulty} />
                          </Link>
                        </li>
                      ))}
                      {totalProblems === 0 && (
                        <li className="text-xs italic text-muted-foreground">În curând...</li>
                      )}
                    </ul>
                  </section>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
