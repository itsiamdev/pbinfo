import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/raspunsuri")({
  component: RouteComponent,
});

type Answer = {
  id: number;
  title: string;
  content: string;
};

const MOCK_DATA: Answer[] = [
  {
    id: 1,
    title: "Suma a două numere",
    content: "Se citește a și b, se afișează suma a+b.",
  },
  {
    id: 2,
    title: "Număr par sau impar",
    content: "Dacă n % 2 == 0 → par, altfel impar.",
  },
  {
    id: 3,
    title: "Factorial",
    content: "n! = 1 * 2 * ... * n",
  },
];

function RouteComponent() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<Answer[]>(MOCK_DATA);

  // debounce (300ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  // filtrare
  useEffect(() => {
    const filtered = MOCK_DATA.filter((item) =>
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );

    setResults(filtered);
  }, [debouncedQuery]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Răspunsuri</h1>
      <p className="mt-2 text-muted-foreground">Caută rapid soluții pentru probleme.</p>

      {/* INPUT SEARCH */}
      <input
        type="text"
        placeholder="Caută o problemă..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mt-4 w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* REZULTATE */}
      <div className="mt-6 space-y-4">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.id} className="p-4 border rounded-xl">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground">Nu am găsit rezultate 😢</p>
        )}
      </div>
    </div>
  );
}
