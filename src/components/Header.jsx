import './Header.css'
import { useTheme } from '../contexts/useTheme.js'

function Header() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">
            <img src="public/image.png" alt="PBInfo Logo" />
          </span>
          <span>pbinfo</span>
        </div>
        <nav className="nav">
          <a href="#problems">Probleme</a>
          <a href="#about">Despre</a>
        </nav>
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Schimbă în mod luminos' : 'Schimbă în mod întunecat'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}

export default Header
