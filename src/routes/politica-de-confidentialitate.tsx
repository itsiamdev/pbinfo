import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/politica-de-confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politică de confidențialitate — Rezolvări PbInfo" },
      {
        name: "description",
        content:
          "Informații despre modul în care colectăm, utilizăm și protejăm datele personale ale utilizatorilor.",
      },
    ],
  }),
  component: PoliticaPage,
});

function PoliticaPage() {
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
          Politică de confidențialitate
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Ultima actualizare: 20 iunie 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Introduce</h2>
            <p className="mt-3">
              Această politică explică ce date colectăm, de ce le colectăm și cum le protejăm. Platforma
              este educațională și nu colectă date personale fără consimțământ.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Date colectate</h2>
            <p className="mt-3">
              Putem colecta date anonyme de utilizare (pagini vizitate, timp petrecut, tip dispozitiv)
              pentru a îmbunătăți experiența. Nu colectăm nume, adrese de email sau alte date de
              identificare fără acordul explicit al utilizatorului.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Cookie-uri</h2>
            <p className="mt-3">
              Utilizăm cookie-uri esențiale pentru funcționarea platformei. Cookie-urile de analiză sunt
              opționale și pot fi dezactivate din browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Servicii terțe</h2>
            <p className="mt-3">
              Putem folosi servicii precum Google Analytics sau tool-uri de hosting. Acele servicii au
              propriile lor politici de confidențialitate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Drepturile tale</h2>
            <p className="mt-3">
              Ai dreptul să soliciti ștergerea sau corectarea datelor. Pentru orice cerere, ne poți
              contacta la adresa de email din pagina de Dezvoltator.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Contact</h2>
            <p className="mt-3">
              Pentru întrebări despre confidențialitate, accesează pagina{" "}
              <Link to="/dezvoltator" className="text-primary hover:underline">
                Dezvoltator
              </Link>{" "}
              sau scrie-ne un email.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
