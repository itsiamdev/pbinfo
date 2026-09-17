import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
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
            Contribuie direct pe GitHub cu idei, probleme și rezolvări pentru a face platforma mai completă și mai utilă pentru comunitatea de elevi.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Înapoi la probleme
            </Link>
            <a
              href="https://github.com/itsiamdev/pbinfo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Contribuie pe GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-background/90 p-8 shadow-sm shadow-black/5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Pași de contribuire
          </h2>
          <ol className="mt-6 space-y-4 list-decimal pl-6 text-foreground/90">
            <li className="mt-3">
              <span className="font-semibold">Fork repository</span> — mergi pe pagina de GitHub și
              apasă butonul „Fork” pentru a crea propria ta copie a repository-ului.
            </li>
            <li className="mt-3">
              <span className="font-semibold">Clonează repository-ul</span> — clonează fork-ul pe
              calculatorul tău folosind comanda{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">git clone</code>.
            </li>
            <li className="mt-3">
              <span className="font-semibold">Creează o ramură</span> — creează o ramură nouă pentru
              modificările tale:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">git checkout -b feature/nume</code>
              .
            </li>
            <li className="mt-3">
              <span className="font-semibold">Fă modificările</span> — adaugă rezolvări, exemple sau
              îmbunătățiri și commit-uiează-le folosind mesaje clare și concise.
            </li>
            <li className="mt-3">
              <span className="font-semibold">Trimite un pull request</span> — deschide un Pull
              Request pe GitHub din ramura ta către ramura principală a repository-ului original.
            </li>
          </ol>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-background/90 p-8 shadow-sm shadow-black/5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Contact
          </h2>
          <p className="mt-3 text-foreground/90">
            Pentru orice nelămurire sau sugestie legată de contribuire, mă poți contacta pe
            LinkedIn:
          </p>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/itsiamdev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Linkedin className="h-5 w-5" />
              linkedin.com/in/itsiamdev
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
