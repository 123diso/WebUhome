import '../styles/navbar.css'

function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">UHome</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <button className="menu-btn" aria-label="menu">
          ☰
        </button>
      </nav>
    </header>
  )
}

export default Navbar