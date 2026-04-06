import './Navbar.css';
import logo from '../assets/uhomelogo.png';
import profile from '../assets/profile.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" onClick={() => navigate('/')} />

      <div className="nav-right">
        <span className="home" onClick={() => navigate('/')}>
          Home
        </span>

        <img
          src={profile}
          alt="profile"
          className="profile"
          onClick={() => navigate('/login')}
        />
      </div>
    </div>
  );
};

export default Navbar;
