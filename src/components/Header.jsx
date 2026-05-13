import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <span>PBInfo</span>
        </div>
        <nav className="nav">
          <a href="#problems">Probleme</a>
          <a href="#about">Despre</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
