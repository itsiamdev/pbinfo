import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <h1>Despre Proiect</h1>
      <p>Acest proiect conține soluțiile problemelor de pe platforma <strong>pbinfo</strong>, organizate după clasă și temă.</p>
      <h2>Structura</h2>
      <ul>
        <li><strong>Clasa a IX-a</strong> — elemente de bază ale limbajului C++</li>
        <li><strong>Structura de decizie</strong> — probleme cu structuri de decizie (`if`, `switch`)</li>
        <li><strong>Operatori și expresii</strong> — probleme cu operatori și expresii matematice</li>
      </ul>
      <h2>Utilizare</h2>
      <p>Fiecare fișier `.cpp` conține rezolvarea unei probleme de pe pbinfo, numerotată după ID-ul problemei.</p>
    </div>
  )
}

export default About
