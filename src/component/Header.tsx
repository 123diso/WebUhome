import { useNavigate } from 'react-router-dom';
import '../styles/header.css';
import uhomeLogo from '../assets/imgLogin/Uhome.png';
import userIcon from '../assets/imgLogin/perf.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <img
          src={uhomeLogo}
          alt="UHome"
          className="header-logo"
          onClick={() => navigate('/')}
        />

        <div className="header-right">
          <nav className="header-nav">
            <button onClick={() => document.getElementById('features')?.scrollIntoView()}>
              Features
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView()}
            >
              How it Works
            </button>
            <button onClick={() => document.getElementById('opinions')?.scrollIntoView()}>
              Reviews
            </button>
          </nav>

          <button className="header-user-btn" onClick={() => navigate('/login')}>
            <img src={userIcon} alt="user" className="header-user-img" />
          </button>
        </div>
      </div>
    </header>
  );
}
