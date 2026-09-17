import { Link } from "@tanstack/react-router";

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <span className="text-lg font-extrabold tracking-tight">
              Rezolvări <span className="text-primary">pbinfo</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              O platformă educațională pentru elevii care vor să înțeleagă mai bine programarea și
              algoritmii.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Navigare</h2>
            <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Probleme
              </Link>
              <Link to="/categorii" className="hover:text-foreground">
                Categorii
              </Link>
              <Link to="/raspunsuri" className="hover:text-foreground">
                Răspunsuri
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Suport și contact
            </h2>
            <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-muted-foreground">
              <Link to="/contribuie" className="hover:text-foreground">
                Contribuie la proiect
              </Link>
              <Link to="/dezvoltator" className="hover:text-foreground">
                Contactează dezvoltatorul
              </Link>
              <Link to="/politica-de-confidentialitate" className="hover:text-foreground">
                Politică de confidențialitate
              </Link>
              <Link to="/termeni-si-conditii" className="hover:text-foreground">
                Termeni și condiții
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground position-relative text-center">
          © {new Date().getFullYear()} Rezolvări pbinfo. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}

export { Footer };
