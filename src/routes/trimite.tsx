import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/trimite")({
  head: () => ({
    meta: [
      { title: "Trimite o soluție — Rezolvări PbInfo" },
      {
        name: "description",
        content: "Contribuie cu propria ta rezolvare C++ pentru o problemă de pe pbinfo.ro.",
      },
    ],
  }),
  component: TrimitePage,
});

function TrimitePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
          Contribuie
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Trimite-ne soluția ta.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ai o rezolvare mai elegantă sau o explicație mai bună? Trimite-o și o vom
          adăuga în catalog după revizuire.
        </p>

        {submitted ? (
          <div className="mt-10 flex items-start gap-4 rounded-xl border border-emerald-300 bg-emerald-50 p-6 dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
              <Check className="size-5" />
            </div>
            <div>
              <p className="font-bold text-emerald-800 dark:text-emerald-200">
                Soluția a fost trimisă!
              </p>
              <p className="text-sm text-emerald-700 dark:text-emerald-300/80">
                Mulțumim. O vom analiza și-ți vom răspunde în câteva zile.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-10 space-y-6"
          >
            <Field label="ID-ul problemei pe pbinfo.ro" htmlFor="pid">
              <input
                id="pid"
                required
                type="number"
                placeholder="ex: 1842"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <Field label="Titlul problemei" htmlFor="title">
              <input
                id="title"
                required
                type="text"
                placeholder="ex: Suma Cifrelor"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Dificultate" htmlFor="diff">
                <select
                  id="diff"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="usor">Ușor</option>
                  <option value="mediu">Mediu</option>
                  <option value="greu">Greu</option>
                </select>
              </Field>
              <Field label="Complexitate" htmlFor="cx">
                <input
                  id="cx"
                  type="text"
                  placeholder="ex: O(n log n)"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm font-mono focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </Field>
            </div>

            <Field label="Explicație" htmlFor="exp">
              <textarea
                id="exp"
                required
                rows={4}
                placeholder="Explică ideea algoritmului în câteva propoziții..."
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm leading-relaxed focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <Field label="Cod C++" htmlFor="code">
              <textarea
                id="code"
                required
                rows={12}
                placeholder={`#include <iostream>\nusing namespace std;\n\nint main() {\n    // ...\n    return 0;\n}`}
                className="w-full rounded-md border border-border bg-code-bg px-4 py-3 font-mono text-sm leading-relaxed text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <button
              type="submit"
              className="rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              Trimite soluția
            </button>
          </form>
        )}
      </main>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
