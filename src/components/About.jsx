import { Link } from 'react-router-dom'
import './About.css'

const sections = [
  {
    title: 'Structura',
    description: 'Rezolvările sunt organizate după clasă și temă, pentru a fi ușor de găsit în timpul pregătirii.',
    items: ['Clasa a IX-a', 'Elemente de bază ale limbajului C++', 'Operatori și expresii', 'Structura de decizie']
  },
  {
    title: 'Utilizare',
    description: 'Fiecare fișier .cpp conține rezolvarea unei probleme de pe pbinfo, numerotată după ID-ul problemei.',
    items: ['Caută după număr sau titlu', 'Deschide o problemă', 'Copiază codul când ai nevoie']
  },
  {
    title: 'Scop',
    description: 'Website-ul ajută elevii să compare rapid soluțiile și să înțeleagă pașii de bază ai programării în C++.',
    items: ['Exemple clare', 'Cod compact', 'Design responsive']
  }
]

const About = () => {
  return (
    <section className="about-page">
      <div className="about-hero">
        <span className="about-eyebrow">Despre proiect</span>
        <h1>Rezolvări pbinfo pentru clasa a IX-a</h1>
        <p>
          Un ghid rapid pentru problemele de bază din C++, cu căutare simplă și cod gata de citit.
        </p>
        <Link to="/" className="about-back">Înapoi la probleme</Link>
      </div>

      <div className="about-grid">
        {sections.map(section => (
          <article className="about-card" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <ul>
              {section.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
