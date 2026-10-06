import { Link } from "@tanstack/react-router";
import type { Problem } from "@/data/problems";
import { CodeBlock } from "./CodeBlock";

export function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <article className="space-y-4 bg-background p-6">
      <Link
        to="/problema/$id"
        params={{ id: String(problem.id) }}
        className="inline-block font-mono text-sm font-bold tracking-tight text-primary hover:underline"
      >
        #{problem.id}
      </Link>
      {problem.code.trim() ? (
        <CodeBlock code={problem.code} />
      ) : (
        <p className="rounded-lg border border-dashed border-border p-5 text-sm text-muted-foreground">
          Nu există o soluție pentru această problemă.
        </p>
      )}
    </article>
  );
}
