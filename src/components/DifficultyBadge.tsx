import { DIFFICULTY_META, type Difficulty } from "@/data/problems";

const STYLES: Record<Difficulty, string> = {
  usor: "bg-emerald-50 text-emerald-700 ring-emerald-600/15 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/20",
  mediu: "bg-amber-50 text-amber-700 ring-amber-600/15 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-400/20",
  greu: "bg-rose-50 text-rose-700 ring-rose-600/15 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/20",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ${STYLES[difficulty]}`}
    >
      {DIFFICULTY_META[difficulty].label}
    </span>
  );
}
