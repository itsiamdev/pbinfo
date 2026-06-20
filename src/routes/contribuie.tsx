/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contribuie")({
  head: () => ({
    meta: [
      { title: "Contribuie — Rezolvări PbInfo" },
      {
        name: "description",
        content: "Contribuie cu idei, probleme și rezolvări pentru a face platforma mai completă.",
      },
    ],
  }),
  component: ContribuiePage,
});

function ContribuiePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm shadow-black/5">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Vrei să contribui?
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Contribuie la Rezolvări <span className="text-primary">pbinfo</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Trimite-ne probleme, soluții sau sugestii pentru a îmbunătăți platforma pentru elevii de
            liceu.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Înapoi la probleme
            </Link>
            <a
              href="mailto:contact@pbinfo.example"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Trimite-ne un mesaj
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
