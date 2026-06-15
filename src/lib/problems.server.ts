import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { Category, Difficulty, Problem } from "@/data/problems";

type ProblemMetadata = Omit<Problem, "id" | "slug" | "code">;

const PROBLEM_METADATA: Record<number, ProblemMetadata> = {
  813: {
    title: "Suma a trei termeni",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citește un număr natural a. Să se afișeze valoarea expresiei a + 2a + 2a - 3.",
    explanation: [
      "Citim numărul a.",
      "Calculăm expresia cerută folosind operații aritmetice directe.",
      "Afișăm rezultatul.",
    ],
    complexity: "O(1)",
    likes: 12,
  },
  814: {
    title: "Expresie liniară",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere întregi x și y. Să se afișeze valoarea expresiei 3y - x.",
    explanation: [
      "Citim valorile x și y.",
      "Calculăm 3 * y - x.",
      "Afișăm rezultatul obținut.",
    ],
    complexity: "O(1)",
    likes: 18,
  },
  815: {
    title: "Împărțire exactă",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere naturale l și h. Să se afișeze de câte ori se cuprinde l în h.",
    explanation: [
      "Citim divisorul l și numărul h.",
      "Folosim împărțirea întreagă h / l pentru a afla câte valori complete de l încap în h.",
      "Afișăm rezultatul.",
    ],
    complexity: "O(1)",
    likes: 16,
  },
  939: {
    title: "Suma a două numere",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere întregi a și b. Să se afișeze suma lor.",
    explanation: [
      "Citim cele două numere.",
      "Calculăm suma a + b.",
      "Afișăm rezultatul.",
    ],
    complexity: "O(1)",
    likes: 24,
  },
  941: {
    title: "La mulți ani!",
    difficulty: "usor",
    category: "String-uri",
    statement: "Să se afișeze mesajul La multi ani!.",
    explanation: [
      "Problema nu necesită date de intrare.",
      "Afișăm direct șirul de caractere cerut.",
    ],
    complexity: "O(1)",
    likes: 31,
  },
  1258: {
    title: "Diferența a două numere",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere întregi a și b. Să se afișeze diferența a - b.",
    explanation: [
      "Citim cele două numere.",
      "Calculăm diferența a - b.",
      "Afișăm rezultatul.",
    ],
    complexity: "O(1)",
    likes: 21,
  },
  1260: {
    title: "Operații aritmetice",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere întregi a și b. Să se afișeze suma, diferența, produsul și câtul împărțirii întregi.",
    explanation: [
      "Citim valorile a și b.",
      "Calculăm cele patru operații: a + b, a - b, a * b și a / b.",
      "Afișăm rezultatele în ordinea cerută.",
    ],
    complexity: "O(1)",
    likes: 35,
  },
  1273: {
    title: "Ultima cifră a sumei",
    difficulty: "usor",
    category: "Cifre",
    statement: "Se citesc două numere naturale a și b. Să se afișeze ultima cifră a sumei lor.",
    explanation: [
      "Citim numerele a și b.",
      "Calculăm suma lor.",
      "Folosim operatorul modulo 10 pentru a extrage ultima cifră.",
    ],
    complexity: "O(1)",
    likes: 28,
  },
  2240: {
    title: "Preț total",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citește valoarea C. Să se calculeze C + 2C + 4C.",
    explanation: [
      "Citim valoarea C.",
      "Calculăm P = 2 * C și G = 2 * P.",
      "Afișăm suma C + P + G.",
    ],
    complexity: "O(1)",
    likes: 19,
  },
  2263: {
    title: "Produs extins",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc cinci numere întregi t1, t2, n, m și z. Să se calculeze (t1 * n + t2 * m) * z.",
    explanation: [
      "Citim toate valorile de intrare.",
      "Calculăm suma ponderată t1 * n + t2 * m.",
      "Înmulțim rezultatul cu z și afișăm valoarea finală.",
    ],
    complexity: "O(1)",
    likes: 14,
  },
  3178: {
    title: "Cost total",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc trei numere naturale f, b și n. Să se calculeze 3 * f * n + 2 * b * n.",
    explanation: [
      "Citim valorile f, b și n.",
      "Calculăm cele două componente ale costului.",
      "Adunăm componentele și afișăm rezultatul.",
    ],
    complexity: "O(1)",
    likes: 17,
  },
  3179: {
    title: "Puterea a cincea",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citește un număr natural n. Să se afișeze n la puterea a cincea.",
    explanation: [
      "Citim numărul n.",
      "Calculăm n * n * n * n * n.",
      "Afișăm rezultatul.",
    ],
    complexity: "O(1)",
    likes: 22,
  },
  3180: {
    title: "Suma ponderată",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două triplete de numere naturale (a, b, c) și (n, m, p). Să se calculeze a * n + b * m + c * p.",
    explanation: [
      "Citim cele două triplete.",
      "Înmulțim termenii corespunzători.",
      "Afișăm suma produselor.",
    ],
    complexity: "O(1)",
    likes: 20,
  },
  3181: {
    title: "Împărțire cu rest",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc trei numere naturale x, y și n. Să se determine câte grupe complete de x * y, câte grupe de y și câte unități rămase se pot forma din n.",
    explanation: [
      "Calculăm câte grupe complete de x * y încap în n.",
      "Actualizăm restul rămas după aceste grupe.",
      "Calculăm câte grupe de y și câte unități mai rămân.",
      "Afișăm cele trei valori.",
    ],
    complexity: "O(1)",
    likes: 23,
  },
  3182: {
    title: "Câte valori încap",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere naturale z și n. Să se afișeze câte valori egale cu z se pot forma din n.",
    explanation: [
      "Citim z și n.",
      "Folosim împărțirea întreagă n / z.",
      "Afișăm numărul de valori complete.",
    ],
    complexity: "O(1)",
    likes: 15,
  },
  3210: {
    title: "Cutii și rest",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc capacitatea B a unei cutii și suma S. Să se determine câte cutii se pot completa și câte unități mai sunt necesare pentru a completa ultima cutie.",
    explanation: [
      "Scădem repetat capacitatea B din S pentru a număra cutiile complete.",
      "Când S devine mai mic decât B, am aflat restul curent.",
      "Calculăm câte unități mai lipsesc pentru ultima cutie: B - S.",
      "Afișăm numărul de cutii și lipsa calculată.",
    ],
    complexity: "O(1)",
    likes: 26,
  },
  3978: {
    title: "Sume de intervale",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc trei numere naturale a, b și c. Să se afișeze sumele intervalelor [a, b], [b, c] și [a, c].",
    explanation: [
      "Folosim formula sumei primelor k numere naturale: k * (k + 1) / 2.",
      "Suma intervalului [x, y] este S(1, y) - S(1, x - 1).",
      "Calculăm cele trei sume cerute și le afișăm.",
    ],
    complexity: "O(1)",
    likes: 29,
  },
  4360: {
    title: "Cifre identice",
    difficulty: "mediu",
    category: "Cifre",
    statement: "Se citesc două numere naturale de câte trei cifre, a și b. Să se determine dacă cele două numere au aceleași cifre.",
    explanation: [
      "Extragem cifrele ambelor numere.",
      "Comparăm suma cifrelor, produsul cifrelor și suma pătratelor cifrelor.",
      "Dacă toate cele trei valori coincid, numerele au aceleași cifre.",
      "Afișăm DA sau NU.",
    ],
    complexity: "O(1)",
    likes: 44,
  },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getMetadata(id: number): ProblemMetadata {
  return PROBLEM_METADATA[id] ?? {
    title: `Problema #${id}`,
    difficulty: "usor" satisfies Difficulty,
    category: "Aritmetică" satisfies Category,
    statement: "Se citesc datele de intrare și se afișează rezultatul cerut.",
    explanation: ["Citim datele de intrare.", "Aplicăm operațiile necesare.", "Afișăm rezultatul."],
    complexity: "O(1)",
    likes: 0,
  };
}

export async function getProblemsFromFolder() {
  const folder = path.join(process.cwd(), "rezolvari pbinfo");
  const files = await readdir(folder);
  const cppFiles = files
    .filter((file) => file.endsWith(".cpp"))
    .sort((a, b) => {
      const left = Number(path.basename(a, ".cpp"));
      const right = Number(path.basename(b, ".cpp"));
      return left - right || a.localeCompare(b);
    });

  const problems = await Promise.all(
    cppFiles.map(async (file) => {
      const id = Number(path.basename(file, ".cpp"));
      const code = await readFile(path.join(folder, file), "utf8");
      const metadata = getMetadata(id);

      return {
        ...metadata,
        id,
        slug: `${id}-${slugify(metadata.title)}`,
        code,
      } satisfies Problem;
    }),
  );

  return problems;
}

export async function getProblemFromFolder(id: number) {
  const problems = await getProblemsFromFolder();
  return problems.find((problem) => problem.id === id);
}
