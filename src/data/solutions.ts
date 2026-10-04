const solutionFiles = import.meta.glob<string>("../../rezolvari pbinfo/*.cpp", {
  eager: true,
  query: "?raw",
  import: "default",
});

export const SOLUTIONS_BY_ID = new Map(
  Object.entries(solutionFiles).flatMap(([path, code]) => {
    const match = path.match(/(\d+)\.cpp$/);
    return match ? [[Number(match[1]), code] as const] : [];
  }),
);
