import '../styles/navbar.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <img src="/uhome-logo.png" alt="UHome logo" className="brand-logo" />
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/">Search</Link>
        <Link to="/profile.tsx" className="menu-btn" aria-label="Go to profile">
          <FaRegUserCircle />
        </Link>
      </nav>
    </header>
  )
}
