import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/raspunsuri")({
  head: () => ({
    meta: [
      { title: "Soluții — PbInfo" },
      {
        name: "description",
        content: "Soluții C++ pentru probleme PbInfo, identificate după ID.",
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
            Soluții C++
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Soluțiile sunt afișate doar cu ID-ul problemei, fără enunț.
          </p>
        </div>
      </header>

      <Footer />
    </div>
  );
}
