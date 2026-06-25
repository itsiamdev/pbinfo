# Contributing

Thank you for wanting to help! This project is dedicated to high school and middle school students, and any contribution is welcome.

## How to contribute

### 1. Adding a new problem

Problems and solutions are stored in `src/data/problems.ts`.

#### Problem structure

Each problem must follow the `Problem` interface:

```ts
{
  id: number,          // problem ID from pbinfo.ro
  slug: string,        // URL identifier (ex: "suma-cifrelor")
  title: string,       // problem title
  difficulty: "usor" | "mediu" | "greu",
  category: Category,  // one of the defined categories
  statement: string,   // problem statement
  explanation: string[], // step by step explanations
  complexity: string,  // algorithm complexity
  code: string,        // complete C++ code (the solution)
  likes: number,       // number of likes (optional)
}
```

#### Steps

1. Open `src/data/problems.ts`
2. Add a new object in the `PROBLEMS` array
3. Make sure the `id` is unique
4. Select the correct difficulty and category
5. The C++ code must be valid and well-commented

#### Example

```ts
export const PROBLEMS: Problem[] = [
  // ... existing problems
  {
    id: 1234,
    slug: "problem-name",
    title: "Problem Title",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Read a number n. Print ...",
    explanation: [
      "First step: read number n.",
      "Second step: compute the result.",
      "Display the result.",
    ],
    complexity: "O(n)",
    code: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << n;
    return 0;
}`,
    likes: 0,
  },
];
```

### 2. Modifying an existing solution

If you want to improve a solution:

1. Find the problem in `src/data/problems.ts` by `id` or `slug`
2. Edit `code`, `explanation` or `complexity`
3. Keep the existing structure and code style

### 3. Reporting a bug

Open a GitHub issue and include:

- A clear, concise title
- Steps to reproduce the problem
- What you expected to happen
- Screenshots (if applicable)

## Code rules

### C++

- Use `#include <iostream>` and `using namespace std;`
- Indent with 4 spaces
- Put braces on the same line as the declaration
- Leave a space after `;` inside loops
- Avoid global variables when possible
- Include comments for important steps

### TypeScript / React

- Indent with 2 spaces
- Use functional components
- Keep the existing conventions from `src/routes/` and `src/components/`

## Setting up the development environment

### Requirements

- Node.js >= 18
- npm or bun

### Installation

```bash
npm install
```

### Running in development mode

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Lint and formatting

```bash
npm run lint
npm run format
```

## Available categories

| Category | Description |
| --- | --- |
| Aritmetică | Simple operations, expressions, divisions, sums and direct calculations. |
| Vectori | Operations on arrays of elements, traversals, processing. |
| Matrice | Two-dimensional arrays, row and column traversals. |
| Sortări | Sorting algorithms: bubble, selection, merge, quick. |
| Recursivitate | Functions that call themselves, divide and conquer. |
| Cifre | Processing the digits of a natural number. |
| String-uri | Working with character strings and texts. |
| Grafuri | BFS/DFS traversals, shortest paths, connectivity. |
| Căutare | Linear search, binary search, two-pointers. |

## Difficulties

| Difficulty | Value |
| --- | --- |
| Easy | `usor` |
| Medium | `mediu` |
| Hard | `greu` |

## License

See [LICENSE](LICENSE) for details.
