import { useEffect, useMemo, useState } from 'react'
import ProblemCard from './ProblemCard'
import './ProblemsSection.css'

const problems = [
  {
    number: '813',
    title: 'Perimetrul dreptunghiului',
    filename: '813.cpp',
    code: `#include <iostream>
using namespace std;

int main()
{
    int a;
    cin >> a;
    cout << a + 2 * a + 2 * a - 3;
    return 0;
}`
  },
  {
    number: '814',
    title: 'Aria dreptunghiului',
    filename: '814.cpp',
    code: `#include <iostream>
using namespace std;

int main()
{
    int x, y;
    cin >> x >> y;
    cout << 3 * y - x;
    return 0;
}`
  },
  {
    number: '939',
    title: 'La mulți ani!',
    filename: '939.cpp',
    code: `#include <iostream>

using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << a + b;
    return 0;
}`
  },
  {
    number: '941',
    title: 'La mulți ani!',
    filename: '941.cpp',
    code: `#include <iostream>

using namespace std;

int main()
{
    cout << "La multi ani!";
    return 0;
}`
  },
  {
    number: '1258',
    title: 'Scăderea a două numere',
    filename: '1258.cpp',
    code: `#include <iostream>

using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << a - b;
    return 0;
}`
  },
  {
    number: '1260',
    title: 'Operații pe a și b',
    filename: '1260.cpp',
    code: `#include <iostream>

using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << a + b << " " << a - b << " " << a * b << " " << a / b;
    return 0;
}`
  },
  {
    number: '1273',
    title: 'Ultima cifră a sumei',
    filename: '1273.cpp',
    code: `#include <iostream>

using namespace std;

int main()
{
    int a, b, s = 0;
    cin >> a >> b;
    s = a + b;
    int n = s % 10;
    cout << n;
    return 0;
}`
  },
  {
    number: '2240',
    title: 'C, P, G, T',
    filename: '2240.cpp',
    code: `#include <iostream>

using namespace std;

int main(){
    int C, P, G, T;
    cin >> C;
    P = 2 * C;
    G = 2 * P;
    T = C + P + G;
    cout << T;
    return 0;
}`
  },
  {
    number: '2263',
    title: 'Timp total de lucru',
    filename: '2263.cpp',
    code: `#include <iostream>

using namespace std;

int main(){
    int t1, t2, n, m, z;
    cin >> t1 >> t2 >> n >> m >> z;
    int a = t1 * n + t2 * m;
    int t = a * z;
    cout << t;
    return 0;
}`
  },
  {
    number: '3178',
    title: 'Expresie cu f, b, n',
    filename: '3178.cpp',
    code: `#include <iostream>

using namespace std;

int main()
{
    int f, b, n;
    cin >> f >> b >> n;
    n = 3 * f * n + 2 * b * n;
    cout << n;
    return 0;
}`
  },
  {
    number: '3179',
    title: 'Puterea a 5-a',
    filename: '3179.cpp',
    code: `#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    n = n * n * n * n * n;
    cout << n;
    return 0;
}`
  },
  {
    number: '3180',
    title: 'Expresie liniară',
    filename: '3180.cpp',
    code: `#include <iostream>

using namespace std;

int main()
{
    int a, b, c, n, m, p;
    cin >> a >> b >> c; cin >> n >> m >> p;
    cout << a * n + b * m + c * p;
    return 0;
}`
  },
  {
    number: '3210',
    title: 'Număr cutii și rest',
    filename: '3210.cpp',
    code: `#include <iostream>
using namespace std;

int main()
{
    int B, S;
    cin >> B >> S;
    int numCutii = 0, rest = 0;
    while (S >= B) {
        numCutii++;
        S -= B;
    }
    rest = B - S;
    cout << numCutii << " " << rest;
    return 0;
}`
  },
  {
    number: '3978',
    title: 'Sume de intervale',
    filename: '3978.cpp',
    code: `#include <iostream>
using namespace std;

int main()
{
    int s, a, b, c;
    cin >> a >> b >> c;
    s = b * (b + 1) / 2 - a * (a - 1) / 2;
    cout << s << " ";
    s = c * (c + 1) / 2 - b * (b - 1) / 2;
    cout << s << " ";
    s = c * (c + 1) / 2 - a * (a - 1) / 2;
    cout << s << " ";
    return 0;
}`
  }
]

function ProblemsSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProblems = useMemo(() => {
    if (!searchQuery.trim()) return problems
    const query = searchQuery.toLowerCase().trim()
    return problems.filter(p =>
      p.number.includes(query) ||
      p.title.toLowerCase().includes(query) ||
      p.filename.toLowerCase().includes(query)
    )
  }, [searchQuery])

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  const slides = useMemo(() => {
    const size = 3
    return Array.from({ length: Math.ceil(problems.length / size) }, (_, index) => (
      problems.slice(index * size, index * size + size)
    ))
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(current => (current + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = index => {
    setCurrentSlide(index)
  }

  const goToPreviousSlide = () => {
    setCurrentSlide(current => (current - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide(current => (current + 1) % slides.length)
  }

  return (
    <section className="problems-section">
      <div className="container">
        <div className="search-section" id="probleme">
          <div className="search-topline">
            <div>
              <label className="search-label" htmlFor="problem-search">
                <span className="search-icon" aria-hidden="true">⌕</span>
                Caută problemă
              </label>
              <p className="search-hint">Folosește numărul, titlul sau numele fișierului.</p>
            </div>
            <span className="live-count">{filteredProblems.length} rezultate</span>
          </div>

          <div className="search-box">
            <input
              id="problem-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ex: 3180, operații, suma..."
              autoFocus
            />
            <button className="search-btn" onClick={handleClearSearch} type="button">
              Golește
            </button>
          </div>

          <div className="topic-chips" aria-label="Teme disponibile">
            <span>Operatori și expresii</span>
            <span>Structura de decizie</span>
            <span>Input / Output</span>
            <span>Bucle</span>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-num">{problems.length}</div>
              <div className="stat-label">Probleme totale</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">{filteredProblems.length}</div>
              <div className="stat-label">Rezultate afișate</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">C++</div>
              <div className="stat-label">Limbaj</div>
            </div>
          </div>
        </div>

        <div className="carousel-section" aria-label="Carusel de probleme">
          <div className="carousel-heading">
            <div>
              <span className="section-kicker">Carusel animat</span>
              <h2>Probleme recomandate</h2>
            </div>
            <div className="carousel-controls">
              <button type="button" onClick={goToPreviousSlide} aria-label="Problema anterioară">‹</button>
              <button type="button" onClick={goToNextSlide} aria-label="Problema următoare">›</button>
            </div>
          </div>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div className="carousel-slide" key={slideIndex}>
                  {slide.map(problem => (
                    <button
                      type="button"
                      className="carousel-problem-card"
                      key={problem.number}
                      onClick={() => document.getElementById(`problem-${problem.number}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >
                      <span className="carousel-number">#{problem.number}</span>
                      <h3>{problem.title}</h3>
                      <p>{problem.filename}</p>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots" aria-label="Pagina curentă">
            {slides.map((_, index) => (
              <button
                type="button"
                key={index}
                className={index === currentSlide ? 'active' : ''}
                onClick={() => goToSlide(index)}
                aria-label={`Mergi la grupa ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="problems-grid">
          {filteredProblems.length === 0 ? (
            <div className="no-results">
              <span>⌕</span>
              <strong>Nici o problemă găsită</strong>
              <br />
              Încearcă alt număr sau cuvânt cheie
            </div>
          ) : (
            filteredProblems.map((problem, idx) => (
              <div id={`problem-${problem.number}`} className="problem-scroll-target" key={problem.number}>
                <ProblemCard
                  problem={problem}
                  index={idx}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
