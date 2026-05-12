import heroImg from '../assets/hero.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-image">
          <img src={heroImg} alt="Hero" />
        </div>
        <div className="hero-text">
          <h1>Welcome to MyWebsite</h1>
          <p>A modern React application built with Vite, featuring beautiful components and responsive design.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
