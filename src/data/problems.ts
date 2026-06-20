export type Difficulty = "usor" | "mediu" | "greu";
export type Category =
  | "Aritmetică"
  | "Vectori"
  | "Matrice"
  | "Sortări"
  | "Recursivitate"
  | "Cifre"
  | "String-uri"
  | "Grafuri"
  | "Căutare";

export interface Problem {
  id: number;
  slug: string;
  title: string;
  difficulty: Difficulty;
  category: Category;
  statement: string;
  explanation: string[];
  complexity: string;
  code: string;
  likes: number;
}

export const DIFFICULTY_META: Record<Difficulty, { label: string; color: string }> = {
  usor: { label: "Ușor", color: "emerald" },
  mediu: { label: "Mediu", color: "amber" },
  greu: { label: "Greu", color: "rose" },
};

export const CATEGORIES: { name: Category; description: string }[] = [
  {
    name: "Aritmetică",
    description: "Operații simple, expresii, împărțiri, sume și calcule directe.",
  },
  { name: "Vectori", description: "Operații pe șiruri de elemente, parcurgeri, prelucrări." },
  { name: "Matrice", description: "Tablouri bidimensionale, parcurgeri pe linii și coloane." },
  { name: "Sortări", description: "Algoritmi de ordonare: bubble, selection, merge, quick." },
  { name: "Recursivitate", description: "Funcții care se apelează pe sine, divide et impera." },
  { name: "Cifre", description: "Prelucrarea cifrelor unui număr natural." },
  { name: "String-uri", description: "Lucrul cu șiruri de caractere și texte." },
  { name: "Grafuri", description: "Parcurgeri BFS/DFS, drumuri minime, conexitate." },
  { name: "Căutare", description: "Căutare liniară, binară, two-pointers." },
];

export const PROBLEMS: Problem[] = [
  {
    id: 102,
    slug: "suma-cifrelor",
    title: "Suma Cifrelor",
    difficulty: "usor",
    category: "Cifre",
    statement: "Se citește un număr natural n (n ≤ 10^18). Să se afișeze suma cifrelor lui n.",
    explanation: [
      "Extragem ultima cifră a lui n folosind operatorul modulo: n % 10.",
      "O adunăm într-o variabilă s inițializată cu 0.",
      "Eliminăm ultima cifră prin împărțire întreagă: n /= 10.",
      "Repetăm până când n devine 0.",
    ],
    complexity: "O(log₁₀ n)",
    likes: 142,
    code: `#include <iostream>
using namespace std;

int main() {
    long long n, s = 0;
    cin >> n;

    while (n > 0) {
        s += n % 10;
        n /= 10;
    }

    cout << s;
    return 0;
}`,
  },
  {
    id: 23,
    slug: "maxim-minim",
    title: "Maxim și Minim",
    difficulty: "usor",
    category: "Vectori",
    statement: "Se citesc n numere întregi. Să se afișeze valoarea maximă și valoarea minimă.",
    explanation: [
      "Inițializăm maximul cu cea mai mică valoare posibilă și minimul cu cea mai mare.",
      "Pentru fiecare element citit, actualizăm maximul/minimul dacă este cazul.",
      "Afișăm rezultatul la final.",
    ],
    complexity: "O(n)",
    likes: 87,
    code: `#include <iostream>
#include <climits>
using namespace std;

int main() {
    int n, x;
    cin >> n;
    int maxim = INT_MIN, minim = INT_MAX;

    for (int i = 0; i < n; i++) {
        cin >> x;
        if (x > maxim) maxim = x;
        if (x < minim) minim = x;
    }

    cout << maxim << " " << minim;
    return 0;
}`,
  },
  {
    id: 451,
    slug: "oglindit",
    title: "Numărul Oglindit",
    difficulty: "usor",
    category: "Cifre",
    statement:
      "Se dă un număr natural n. Să se afișeze oglinditul lui (cifrele în ordine inversă).",
    explanation: [
      "Pornim cu ogl = 0.",
      "La fiecare pas, înmulțim ogl cu 10 și adăugăm ultima cifră a lui n.",
      "Eliminăm ultima cifră din n. Continuăm până când n devine 0.",
    ],
    complexity: "O(log₁₀ n)",
    likes: 65,
    code: `#include <iostream>
using namespace std;

int main() {
    long long n, ogl = 0;
    cin >> n;

    while (n > 0) {
        ogl = ogl * 10 + n % 10;
        n /= 10;
    }

    cout << ogl;
    return 0;
}`,
  },
  {
    id: 254,
    slug: "bubble-sort",
    title: "Sortare prin Interschimbare",
    difficulty: "usor",
    category: "Sortări",
    statement: "Se citesc n numere. Să se ordoneze crescător folosind metoda bubble sort.",
    explanation: [
      "Comparăm fiecare pereche de elemente vecine și le interschimbăm dacă nu sunt în ordine.",
      "Parcurgem vectorul de n-1 ori; la fiecare trecere, cel mai mare element ajunge la final.",
      "Pentru o mică optimizare, ne oprim dacă într-o trecere completă nu am făcut nicio interschimbare.",
    ],
    complexity: "O(n²)",
    likes: 198,
    code: `#include <iostream>
using namespace std;

int main() {
    int n, a[1001];
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];

    for (int i = 0; i < n - 1; i++) {
        bool schimbat = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]);
                schimbat = true;
            }
        }
        if (!schimbat) break;
    }

    for (int i = 0; i < n; i++) cout << a[i] << " ";
    return 0;
}`,
  },
  {
    id: 452,
    slug: "cautare-binara",
    title: "Căutare Binară",
    difficulty: "mediu",
    category: "Căutare",
    statement:
      "Se dă un vector sortat crescător cu n elemente și o valoare x. Să se determine dacă x apare în vector.",
    explanation: [
      "Pentru un vector sortat, comparăm x cu elementul din mijloc.",
      "Dacă este egal — am găsit. Dacă x e mai mic, căutăm în jumătatea stângă; altfel, în cea dreaptă.",
      "Eliminăm jumătate din candidați la fiecare pas → O(log n).",
    ],
    complexity: "O(log n)",
    likes: 312,
    code: `#include <iostream>
using namespace std;

int cautareBinara(int a[], int n, int x) {
    int st = 0, dr = n - 1;
    while (st <= dr) {
        int m = (st + dr) / 2;
        if (a[m] == x) return m;
        if (a[m] < x) st = m + 1;
        else dr = m - 1;
    }
    return -1;
}

int main() {
    int n, x, a[100001];
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    int poz = cautareBinara(a, n, x);
    cout << (poz != -1 ? "DA" : "NU");
    return 0;
}`,
  },
  {
    id: 891,
    slug: "factorial-recursiv",
    title: "Factorial Recursiv",
    difficulty: "usor",
    category: "Recursivitate",
    statement:
      "Se dă un număr natural n (n ≤ 12). Să se calculeze n! folosind o funcție recursivă.",
    explanation: [
      "Cazul de bază: 0! = 1.",
      "Cazul general: n! = n × (n-1)!",
      "Funcția se apelează pe ea însăși cu un argument mai mic până ajunge la cazul de bază.",
    ],
    complexity: "O(n)",
    likes: 74,
    code: `#include <iostream>
using namespace std;

long long fact(int n) {
    if (n == 0) return 1;
    return n * fact(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << fact(n);
    return 0;
}`,
  },
  {
    id: 1152,
    slug: "fibonacci",
    title: "Numerele Fibonacci",
    difficulty: "mediu",
    category: "Recursivitate",
    statement: "Se dă un număr natural n. Să se afișeze al n-lea termen din șirul lui Fibonacci.",
    explanation: [
      "Definiție: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2).",
      "Recursivitatea pură este exponențială — folosim iterație cu doi termeni precedenți.",
      "La fiecare pas, calculăm termenul curent și actualizăm cei doi precedenți.",
    ],
    complexity: "O(n)",
    likes: 156,
    code: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    long long a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        long long c = a + b;
        a = b;
        b = c;
    }

    cout << a;
    return 0;
}`,
  },
  {
    id: 412,
    slug: "matrice-transpusa",
    title: "Matrice Transpusă",
    difficulty: "usor",
    category: "Matrice",
    statement:
      "Se citește o matrice pătratică n×n. Să se afișeze transpusa ei (liniile devin coloane).",
    explanation: [
      "Transpusa unei matrice A se obține schimbând liniile cu coloanele: A[i][j] → A[j][i].",
      "Putem să o calculăm într-o matrice nouă sau, in-place, interschimbând perechile (i, j) cu (j, i) pentru i < j.",
    ],
    complexity: "O(n²)",
    likes: 92,
    code: `#include <iostream>
using namespace std;

int main() {
    int n, a[101][101];
    cin >> n;

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            cout << a[j][i] << " ";
        cout << "\\n";
    }
    return 0;
}`,
  },
  {
    id: 915,
    slug: "anagrame",
    title: "Anagrame",
    difficulty: "mediu",
    category: "String-uri",
    statement: "Se citesc două cuvinte s1 și s2. Să se afișeze DA dacă sunt anagrame, NU altfel.",
    explanation: [
      "Două cuvinte sunt anagrame dacă au aceleași litere cu aceleași frecvențe.",
      "Sortăm ambele cuvinte alfabetic; sunt anagrame ⇔ devin egale după sortare.",
      "Alternativ, putem număra frecvențele literelor în două vectori și să-i comparăm.",
    ],
    complexity: "O(n log n)",
    likes: 110,
    code: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s1, s2;
    cin >> s1 >> s2;

    sort(s1.begin(), s1.end());
    sort(s2.begin(), s2.end());

    cout << (s1 == s2 ? "DA" : "NU");
    return 0;
}`,
  },
  {
    id: 201,
    slug: "parcurgere-bfs",
    title: "Parcurgere BFS",
    difficulty: "mediu",
    category: "Grafuri",
    statement:
      "Se dă un graf neorientat cu n noduri și m muchii. Să se afișeze ordinea de vizitare BFS pornind din nodul 1.",
    explanation: [
      "Folosim o coadă (queue) și un vector viz[] pentru noduri vizitate.",
      "Introducem nodul de start în coadă și îl marcăm vizitat.",
      "La fiecare pas extragem nodul din față, afișăm și adăugăm vecinii nevizitați în coadă.",
    ],
    complexity: "O(n + m)",
    likes: 187,
    code: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n + 1);

    for (int i = 0; i < m; i++) {
        int x, y;
        cin >> x >> y;
        g[x].push_back(y);
        g[y].push_back(x);
    }

    vector<bool> viz(n + 1, false);
    queue<int> q;
    q.push(1);
    viz[1] = true;

    while (!q.empty()) {
        int nod = q.front(); q.pop();
        cout << nod << " ";
        for (int vecin : g[nod]) {
            if (!viz[vecin]) {
                viz[vecin] = true;
                q.push(vecin);
            }
        }
    }
    return 0;
}`,
  },
  {
    id: 1502,
    slug: "merge-sort",
    title: "Sortare prin Interclasare",
    difficulty: "greu",
    category: "Sortări",
    statement: "Se citesc n numere. Să se sorteze crescător folosind algoritmul Merge Sort.",
    explanation: [
      "Divide: împărțim vectorul în două jumătăți egale.",
      "Stăpânește (recurs): sortăm recursiv fiecare jumătate.",
      "Combină: interclasăm cele două jumătăți sortate într-un vector ordonat.",
    ],
    complexity: "O(n log n)",
    likes: 245,
    code: `#include <iostream>
using namespace std;

void interclasare(int a[], int st, int mij, int dr) {
    int n1 = mij - st + 1, n2 = dr - mij;
    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) L[i] = a[st + i];
    for (int j = 0; j < n2; j++) R[j] = a[mij + 1 + j];

    int i = 0, j = 0, k = st;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) a[k++] = L[i++];
        else a[k++] = R[j++];
    }
    while (i < n1) a[k++] = L[i++];
    while (j < n2) a[k++] = R[j++];
}

void mergeSort(int a[], int st, int dr) {
    if (st >= dr) return;
    int mij = (st + dr) / 2;
    mergeSort(a, st, mij);
    mergeSort(a, mij + 1, dr);
    interclasare(a, st, mij, dr);
}

int main() {
    int n, a[100001];
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    mergeSort(a, 0, n - 1);
    for (int i = 0; i < n; i++) cout << a[i] << " ";
    return 0;
}`,
  },
  {
    id: 1842,
    slug: "dijkstra",
    title: "Drumuri Minime (Dijkstra)",
    difficulty: "greu",
    category: "Grafuri",
    statement:
      "Se dă un graf orientat cu n noduri și m muchii ponderate. Să se determine drumul minim de la nodul 1 la toate celelalte noduri.",
    explanation: [
      "Folosim o coadă cu priorități (min-heap) care păstrează perechi (distanță, nod).",
      "Pornim cu distanța 0 pentru nodul sursă și ∞ pentru rest.",
      "Extragem mereu nodul cu distanță minimă și încercăm să relaxăm fiecare vecin.",
    ],
    complexity: "O((n + m) log n)",
    likes: 421,
    code: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<pair<int,int>>> g(n + 1);

    for (int i = 0; i < m; i++) {
        int x, y, c;
        cin >> x >> y >> c;
        g[x].push_back({y, c});
    }

    vector<long long> d(n + 1, LLONG_MAX);
    priority_queue<pair<long long,int>,
                   vector<pair<long long,int>>,
                   greater<>> pq;
    d[1] = 0;
    pq.push({0, 1});

    while (!pq.empty()) {
        auto [dist, u] = pq.top(); pq.pop();
        if (dist > d[u]) continue;
        for (auto [v, c] : g[u]) {
            if (d[u] + c < d[v]) {
                d[v] = d[u] + c;
                pq.push({d[v], v});
            }
        }
    }

    for (int i = 1; i <= n; i++)
        cout << (d[i] == LLONG_MAX ? -1 : d[i]) << " ";
    return 0;
}`,
  },
];

export function getProblem(id: number): Problem | undefined {
  return PROBLEMS.find((p) => p.id === id);
}
