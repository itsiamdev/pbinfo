import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark, BookmarkCheck, Clock, Heart, Tag } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CodeBlock } from "@/components/CodeBlock";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { useBookmarks } from "@/lib/bookmarks";
import { getProblems } from "@/lib/problems.functions";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/problema/$id")({
  loader: async ({ params }) => {
    const id = Number(params.id);
    const problems = await getProblems();
    const problem = problems.find((candidate) => candidate.id === id);
    if (!problem) throw notFound();

    const related = problems
      .filter((candidate) => candidate.category === problem.category && candidate.id !== id)
      .slice(0, 3);

    return { problem, related };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `#${loaderData.problem.id} ${loaderData.problem.title} — Rezolvare C++` },
          {
            name: "description",
            content: `Rezolvare C++ explicată pentru problema ${loaderData.problem.title} de pe pbinfo.ro.`,
          },
        ]
      : [{ title: "Problemă" }],
  }),
  component: ProblemPage,
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

function ProblemPage() {
  const { problem, related } = Route.useLoaderData();
  const { has, toggle } = useBookmarks();
  const [likes, setLikes] = useState(problem.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((l) => {
      setLikes((n: number) => n + (l ? -1 : 1));
      return !l;
    });
  };

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

        {/* Header */}
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
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={handleLike}
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                liked
                  ? "border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              <Heart className={`size-4 ${liked ? "fill-current" : ""}`} /> {likes}
            </button>
            <button
              onClick={() => toggle(problem.id)}
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                has(problem.id)
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {has(problem.id) ? (
                <>
                  <BookmarkCheck className="size-4" /> Salvată
                </>
              ) : (
                <>
                  <Bookmark className="size-4" /> Salvează
                </>
              )}
            </button>
          </div>
        </header>

        {/* Enunț */}
        <section className="mb-12">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Enunț
          </h2>
          <div className="rounded-xl border border-border bg-accent/30 p-6 text-base leading-relaxed text-foreground">
            {problem.statement}
          </div>
        </section>

        {/* Explicație */}
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

        {/* Cod */}
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

        {/* Comentarii placeholder */}
        <section className="mb-12 rounded-xl border border-border bg-accent/30 p-6">
          <h2 className="mb-2 text-sm font-bold text-foreground">Răspuns</h2>
          <p className="text-sm text-muted-foreground">
            Vrei să vezi explicații și variante alternative?{" "}
            <Link
              to="/raspunsuri/$id"
              params={{ id: String(problem.id) }}
              className="font-medium text-primary hover:underline"
            >
              Vezi răspunsul →
            </Link>
          </p>
        </section>

        {/* Related */}
        <section>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Probleme similare
          </h2>
          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                to="/problema/$id"
                params={{ id: String(p.id) }}
                className="block bg-background p-5 hover:bg-accent/40"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">#{p.id}</span>
                  <DifficultyBadge difficulty={p.difficulty} />
                </div>
                <p className="font-bold text-foreground">{p.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
