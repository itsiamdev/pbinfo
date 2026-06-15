import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Problem } from "@/data/problems";
import { DifficultyBadge } from "./DifficultyBadge";

export function ProblemCard({ problem }: { problem: Problem }) {
  const snippet = problem.code
    .split("\n")
    .find((l) => l.trim().length > 0 && !l.startsWith("#") && !l.startsWith("using"))
    ?.trim()
    .slice(0, 56) ?? "// cod C++";

  return (
    <Link
      to="/problema/$id"
      params={{ id: String(problem.id) }}
      className="group block bg-background p-8 transition-colors hover:bg-accent/40"
    >
      <div className="mb-6 flex items-start justify-between">
        <span className="font-mono text-sm font-bold tracking-tight text-primary">
          #{problem.id}
        </span>
        <DifficultyBadge difficulty={problem.difficulty} />
      </div>
      <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
        {problem.title}
      </h3>
      <p className="mb-6 line-clamp-2 text-sm text-muted-foreground">
        {problem.statement}
      </p>
      <div className="mb-6 rounded bg-code-bg p-4">
        <code className="block truncate font-mono text-[11px] text-white/70">
          {snippet}
        </code>
      </div>
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
        <span>{problem.category}</span>
        <span className="flex items-center gap-1 text-rose-500">
          <Heart className="size-3 fill-current" /> {problem.likes}
        </span>
      </div>
    </Link>
  );
}
