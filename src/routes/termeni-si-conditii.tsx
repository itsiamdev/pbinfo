import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/termeni-si-conditii")({
  head: () => ({
    meta: [
      { title: "Termeni și condiții — Rezolvări PbInfo" },
      {
        name: "description",
        content:
          "Termenii de utilizare ai platformei Rezolvări PbInfo și regulile de folosire a conținutului.",
      },
    ],
  }),
  component: TermeniPage,
});

function TermeniPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Înapoi
        </Link>

        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Termeni și condiții
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Ultima actualizare: 20 iunie 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Acceptarea termenilor</h2>
            <p className="mt-3">
              Prin accesarea și utilizarea platformei Rezolvări PbInfo, ești de acord cu acești
              termeni. Dacă nu ești de acord, te rugăm să nu folosești site-ul.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Utilizare permisă</h2>
            <p className="mt-3">
              Conținutul este destinat exclusiv uzului educațional. Nu îl poți redistribui, modifica
              sau comercializa fără permisiunea scrisă a creatorilor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Proprietate intelectuală</h2>
            <p className="mt-3">
              Toate materialele sunt proprietatea platformei sau a colaboratorilor. Problemele originale
              aparțin site-ului pbinfo.ro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Limita de răspundere</h2>
            <p className="mt-3">
              Ne străduim să oferim conținut corect, dar nu garantăm acuratețea completă a
              explicațiilor. Utilizarea platformei se face pe propria răspundere.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Modificări</h2>
            <p className="mt-3">
              Ne rezervăm dreptul de a actualiza acești termeni oricând. Continuarea utilizării după
              modificări constituie acceptarea noilor termeni.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
