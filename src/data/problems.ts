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
  {
    id: 813,
    slug: "813-suma-a-trei-termeni",
    title: "Suma a trei termeni",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citește un număr natural a. Să se afișeze valoarea expresiei a + 2a + 2a - 3.",
    explanation: [
      "Citim numărul a.",
      "Calculăm expresia cerută folosind operații aritmetice directe.",
      "Afișăm rezultatul.",
    ],
    complexity: "O(1)",
    likes: 12,
    code: "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int a;\n    cin >> a;\n    cout << a + 2 * a + 2 * a - 3;\n    return 0;\n}",
  },
  {
    id: 814,
    slug: "814-expresie-liniara",
    title: "Expresie liniară",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere întregi x și y. Să se afișeze valoarea expresiei 3y - x.",
    explanation: ["Citim valorile x și y.", "Calculăm 3 * y - x.", "Afișăm rezultatul obținut."],
    complexity: "O(1)",
    likes: 18,
    code: "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int x , y;\n    cin >> x >> y;\n    cout << 3 * y - x;\n    return 0;\n}",
  },
  {
    id: 815,
    slug: "815-impartire-exacta",
    title: "Împărțire exactă",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citesc două numere naturale l și h. Să se afișeze de câte ori se cuprinde l în h.",
    explanation: [
      "Citim divisorul l și numărul h.",
      "Folosim împărțirea întreagă h / l pentru a afla câte valori complete de l încap în h.",
      "Afișăm rezultatul.",
    ],
    complexity: "O(1)",
    likes: 16,
    code: "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    int l,h;\n    cin>>l>>h;\n    cout<<h/l;\n    return 0;\n}",
  },
  {
    id: 939,
    slug: "939-suma-a-doua-numere",
    title: "Suma a două numere",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere întregi a și b. Să se afișeze suma lor.",
    explanation: ["Citim cele două numere.", "Calculăm suma a + b.", "Afișăm rezultatul."],
    complexity: "O(1)",
    likes: 24,
    code: "#include <iostream>\n\nusing namespace std;\n\nint main(){\n    int a,b;\n    cin>>a>>b;\n    cout<<a+b;\n    return 0;\n}",
  },
  {
    id: 941,
    slug: "941-la-multi-ani",
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
    code: '#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    cout<<"La multi ani!";\n    return 0;\n}',
  },
  {
    id: 1258,
    slug: "1258-diferenta-a-doua-numere",
    title: "Diferența a două numere",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citesc două numere întregi a și b. Să se afișeze diferența a - b.",
    explanation: ["Citim cele două numere.", "Calculăm diferența a - b.", "Afișăm rezultatul."],
    complexity: "O(1)",
    likes: 21,
    code: "#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a,b;\n    cin>>a>>b;\n    cout<<a-b;\n    return 0;\n}",
  },
  {
    id: 1260,
    slug: "1260-operatii-aritmetice",
    title: "Operații aritmetice",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citesc două numere întregi a și b. Să se afișeze suma, diferența, produsul și câtul împărțirii întregi.",
    explanation: [
      "Citim valorile a și b.",
      "Calculăm cele patru operații: a + b, a - b, a * b și a / b.",
      "Afișăm rezultatele în ordinea cerută.",
    ],
    complexity: "O(1)",
    likes: 35,
    code: '#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a,b;\n    cin>>a>>b;\n    cout<<a+b<<" "<<a-b<<" "<<a*b<<" "<<a/b;\n    return 0;\n}',
  },
  {
    id: 1273,
    slug: "1273-ultima-cifra-a-sumei",
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
    code: "#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a,b,s=0;\n    cin>>a>>b;\n    s=a+b;\n    int n=s%10;\n    cout<<n;\n    return 0;\n}",
  },
  {
    id: 2240,
    slug: "2240-pret-total",
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
    code: "#include <iostream>\n\nusing namespace std;\n\nint main(){\n    int C, P, G, T;\n    cin >> C;\n    P = 2 * C;\n    G = 2 * P;\n    T = C + P + G;\n    cout << T;\n\n    return 0;\n}",
  },
  {
    id: 2263,
    slug: "2263-produs-extins",
    title: "Produs extins",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citesc cinci numere întregi t1, t2, n, m și z. Să se calculeze (t1 * n + t2 * m) * z.",
    explanation: [
      "Citim toate valorile de intrare.",
      "Calculăm suma ponderată t1 * n + t2 * m.",
      "Înmulțim rezultatul cu z și afișăm valoarea finală.",
    ],
    complexity: "O(1)",
    likes: 14,
    code: "#include <iostream>\n\nusing namespace std;\n\nint main(){\n    int t1, t2, n , m , z;\n    cin >> t1 >> t2 >> n >> m >> z;\n\n    int a = t1 * n + t2 * m;\n    int t = a * z;\n\n    cout << t;\n\n    return 0;\n}",
  },
  {
    id: 3178,
    slug: "3178-cost-total",
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
    code: "#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int f,b,n;\n    cin>>f>>b>>n;\n    n=3*f*n+2*b*n;\n    cout<<n;\n    return 0;\n}",
  },
  {
    id: 3179,
    slug: "3179-puterea-a-cincea",
    title: "Puterea a cincea",
    difficulty: "usor",
    category: "Aritmetică",
    statement: "Se citește un număr natural n. Să se afișeze n la puterea a cincea.",
    explanation: ["Citim numărul n.", "Calculăm n * n * n * n * n.", "Afișăm rezultatul."],
    complexity: "O(1)",
    likes: 22,
    code: "#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int n;\n    cin>>n;\n    n=n*n*n*n*n;\n    cout<<n;\n    return 0;\n}",
  },
  {
    id: 3180,
    slug: "3180-suma-ponderata",
    title: "Suma ponderată",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citesc două triplete de numere naturale (a, b, c) și (n, m, p). Să se calculeze a * n + b * m + c * p.",
    explanation: [
      "Citim cele două triplete.",
      "Înmulțim termenii corespunzători.",
      "Afișăm suma produselor.",
    ],
    complexity: "O(1)",
    likes: 20,
    code: "#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a,b,c,n,m,p;\n    cin>>a>>b>>c;cin>>n>>m>>p;\n    cout<<a*n+b*m+c*p;\n    return 0;\n}",
  },
  {
    id: 3181,
    slug: "3181-impartire-cu-rest",
    title: "Împărțire cu rest",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citesc trei numere naturale x, y și n. Să se determine câte grupe complete de x * y, câte grupe de y și câte unități rămase se pot forma din n.",
    explanation: [
      "Calculăm câte grupe complete de x * y încap în n.",
      "Actualizăm restul rămas după aceste grupe.",
      "Calculăm câte grupe de y și câte unități mai rămân.",
      "Afișăm cele trei valori.",
    ],
    complexity: "O(1)",
    likes: 23,
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int a, z, h, x, y, n;\n    cin >> x >> y >> n;\n    a = n / (x * y);\n    n = n - a * x * y;\n    z = n / y;\n    h = n - z * y;\n    cout << a << endl;\n    cout << z << endl;\n    cout << h << endl;\n    return 0;\n}",
  },
  {
    id: 3182,
    slug: "3182-cate-valori-incap",
    title: "Câte valori încap",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citesc două numere naturale z și n. Să se afișeze câte valori egale cu z se pot forma din n.",
    explanation: [
      "Citim z și n.",
      "Folosim împărțirea întreagă n / z.",
      "Afișăm numărul de valori complete.",
    ],
    complexity: "O(1)",
    likes: 15,
    code: "#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int z,n;\n    cin>>z>>n;\n    int l = n/z;\n    cout<<l<<endl;\n    return 0;\n}",
  },
  {
    id: 3210,
    slug: "3210-cutii-si-rest",
    title: "Cutii și rest",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citesc capacitatea B a unei cutii și suma S. Să se determine câte cutii se pot completa și câte unități mai sunt necesare pentru a completa ultima cutie.",
    explanation: [
      "Scădem repetat capacitatea B din S pentru a număra cutiile complete.",
      "Când S devine mai mic decât B, am aflat restul curent.",
      "Calculăm câte unități mai lipsesc pentru ultima cutie: B - S.",
      "Afișăm numărul de cutii și lipsa calculată.",
    ],
    complexity: "O(1)",
    likes: 26,
    code: '#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int B,S;\n    cin>>B>>S;\n    int numCutii=0,rest=0;\n    while(S>=B){\n        numCutii++;\n        S-=B;\n    }\n    rest=B-S;\n    cout<<numCutii<<" "<<rest;\n    return 0;\n}',
  },
  {
    id: 3978,
    slug: "3978-sume-de-intervale",
    title: "Sume de intervale",
    difficulty: "usor",
    category: "Aritmetică",
    statement:
      "Se citesc trei numere naturale a, b și c. Să se afișeze sumele intervalelor [a, b], [b, c] și [a, c].",
    explanation: [
      "Folosim formula sumei primelor k numere naturale: k * (k + 1) / 2.",
      "Suma intervalului [x, y] este S(1, y) - S(1, x - 1).",
      "Calculăm cele trei sume cerute și le afișăm.",
    ],
    complexity: "O(1)",
    likes: 29,
    code: '#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int s, a, b, c;\n    cin >> a >> b >> c;\n    s = b * (b + 1) / 2 - a * (a - 1) / 2;\n    cout << s << " ";\n    s = c * (c + 1) / 2 - b * (b - 1) / 2;\n    cout << s << " ";\n    s = c * (c + 1) / 2 - a * (a - 1) / 2;\n    cout << s << " ";\n    return 0;\n}',
  },
  {
    id: 4360,
    slug: "4360-cifre-identice",
    title: "Cifre identice",
    difficulty: "mediu",
    category: "Cifre",
    statement:
      "Se citesc două numere naturale de câte trei cifre, a și b. Să se determine dacă cele două numere au aceleași cifre.",
    explanation: [
      "Extragem cifrele ambelor numere.",
      "Comparăm suma cifrelor, produsul cifrelor și suma pătratelor cifrelor.",
      "Dacă toate cele trei valori coincid, numerele au aceleași cifre.",
      "Afișăm DA sau NU.",
    ],
    complexity: "O(1)",
    likes: 44,
    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n\n    int a1 = a / 100;\n    int a2 = (a / 10) % 10;\n    int a3 = a % 10;\n\n    int b1 = b / 100;\n    int b2 = (b / 10) % 10;\n    int b3 = b % 10;\n\n    int suma_a = a1 + a2 + a3;\n    int suma_b = b1 + b2 + b3;\n\n    int produs_a = a1 * a2 * a3;\n    int produs_b = b1 * b2 * b3;\n\n    int suma_patrate_a = a1*a1 + a2*a2 + a3*a3;\n    int suma_patrate_b = b1*b1 + b2*b2 + b3*b3;\n\n    if (suma_a == suma_b && produs_a == produs_b && suma_patrate_a == suma_patrate_b) {\n        cout << "DA" << endl;\n    } else {\n        cout << "NU" << endl;\n    }\n\n    return 0;\n}',
  },
];

export function getProblems(): Problem[] {
  return PROBLEMS;
}

export function getProblem(id: number): Problem | undefined {
  return PROBLEMS.find((p) => p.id === id);
}
