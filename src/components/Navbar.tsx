import './Navbar.css';
import logo from '../assets/uhomelogo.png';
import profile from '../assets/profile.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="nav-right">
        <span className="home">Home</span>
        <img src={profile} alt="profile" className="profile" />
      </div>
    </div>
  );
};

export default Navbar;
