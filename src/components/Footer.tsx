import { Link } from "@tanstack/react-router";

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6">
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-extrabold tracking-tight">
              REZOLVĂRI{" "}
              <span className="text-primary">PBINFO</span>
            </span>
            <span className="text-xs text-muted-foreground">
              Platformă educațională pentru elevii de liceu •{" "}
              {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <Link to="/categorii" className="hover:text-foreground">
              Categorii
            </Link>
            <Link to="/raspunsuri" className="hover:text-foreground">
              Răspunsuri
            </Link>
            <a href="#" className="hover:text-foreground">
              Dezvoltator
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            Politică de confidențialitate
          </a>
          <a href="#" className="hover:text-foreground">
            Termeni și condiții
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
