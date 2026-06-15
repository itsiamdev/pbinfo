import { Link } from "@tanstack/react-router";
import { Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Code2 className="size-4" />
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              REZOLVĂRI <span className="text-primary">PBINFO</span>
            </span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              Probleme
            </Link>
            <Link
              to="/categorii"
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              Categorii
            </Link>
            <Link
              to="/trimite"
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              Trimite Soluție
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Schimbă tema"
            className="grid size-9 place-items-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button className="hidden rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary sm:block">
            Autentificare
          </button>
          <button className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90">
            Cont Nou
          </button>
        </div>
      </div>
    </nav>
  );
}
