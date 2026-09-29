import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/raspunsuri")({
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
  component: RăspunsuriLayout,
});

function RăspunsuriLayout() {
  const matchRoute = useMatchRoute();
  const childMatch = matchRoute({ to: "/raspunsuri/$id", fuzzy: true });

  if (childMatch) {
    return <Outlet />;
  }

  return <RăspunsuriListPage />;
}

function RăspunsuriListPage() {
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

      <Footer />
    </div>
  );
}
