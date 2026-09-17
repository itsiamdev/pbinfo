import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/dezvoltator")({
  head: () => ({
    meta: [
      { title: "Dezvoltator — Rezolvări PbInfo" },
      {
        name: "description",
        content: "Informații despre dezvoltatorul platformei Rezolvări PbInfo și modul de contact.",
      },
    ],
  }),
  component: DezvoltatorPage,
});

function DezvoltatorPage() {
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

        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Dezvoltator</h1>
        <p className="mt-4 text-sm text-muted-foreground">Ultima actualizare: 17 septembrie 2026</p>

        <div className="mt-10 flex flex-col items-center">
          <img
            src="/eu.jpg"
            alt="Dezvoltator"
            className="h-48 w-48 rounded-full border border-border object-cover"
          />
        </div>

        <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-bold text-foreground">Despre proiect</h2>
            <p className="mt-3">
              Rezolvări PbInfo este o platformă educațională pentru elevii de gimnaziu și liceu. Aici
              găsești soluții C++ explicate pentru problemele și exercițiile de pe{" "}
              <a
                href="https://www.pbinfo.ro"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500"
              >
                pbinfo.ro
              </a>
              . Proiectul este creat și întreținut de{" "}
              <a
                href="https://itsiamdev.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-500"
              >
                Ioniță Aurel Mihai
              </a>{" "}
              și are ca scop să facă algoritmii și structurile de date mai ușor de înțeles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Misiune</h2>
            <p className="mt-3">
              Am început acest proiect din dorința de a-i ajuta pe elevii care se pregătesc pentru
              ore, examene sau concursuri. Cred că învățarea este mai ușoară atunci când soluțiile
              sunt clare, bine structurate și explicate pas cu pas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Tehnologii folosite</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>React + TypeScript</li>
              <li>Git + GitHub</li>
              <li>Tailwind CSS</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p className="mt-3">
              Pentru sugestii, contribuții sau raportarea unei erori, îmi poți scrie folosind unul
              dintre următoarele canale:
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/itsiamdev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Linkedin className="h-5 w-5" />
                linkedin.com/in/itsiamdev
              </a>
              <a
                href="https://github.com/itsiamdev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Github className="h-5 w-5" />
                github.com/itsiamdev
              </a>
              <a
                href="https://itsiamdev.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Globe className="h-5 w-5" />
                itsiamdev.com
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Contribuie</h2>
            <p className="mt-3">
              Dacă vrei să ajuți proiectul, vizitează pagina{" "}
              <Link to="/contribuie" className="text-primary hover:underline">
                Contribuie
              </Link>{" "}
              pentru a trimite idei, soluții sau sugestii.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
