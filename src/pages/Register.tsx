import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import uhomeLogo from '../assets/imgLogin/Uhome.png';
import mailIcon from '../assets/imgLogin/mail.png';
import passwordIcon from '../assets/imgLogin/Passwo.png';
import UsernameIcon from '../assets/imgLogin/Username.png';
import FullnameIcon from '../assets/imgLogin/Fullname.png';

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    username: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img
          src={uhomeLogo} // <-- cambia si lo tienes en assets
          alt="UHome"
          className="auth-logo"
        />

        <p className="auth-subtitle">Find your place, fit your lifestyle</p>

        <hr className="auth-divider" />

        <div className="auth-form">
          <div className="auth-input-wrapper">
            <div className="auth-icon-image">
              <img src={mailIcon} alt="email" className="auth-icon-img" />
            </div>

            <input
              className="auth-input"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input-wrapper">
            <div className="auth-icon-image">
              <img src={passwordIcon} alt="password" className="auth-icon-img" />
            </div>

            <input
              className="auth-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input-wrapper">
            <div className="auth-icon-image">
              <img src={FullnameIcon} alt="full name" className="auth-icon-img" />
            </div>

            <input
              className="auth-input"
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input-wrapper">
            <div className="auth-icon-image">
              <img src={UsernameIcon} alt="username" className="auth-icon-img" />
            </div>

            <input
              className="auth-input"
              type="text"
              name="username"
              placeholder="User name"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <button className="auth-submit" onClick={() => navigate('/login')}>
            Sign up
          </button>
        </div>

        <hr className="auth-divider" />

        <p className="auth-link-text">
          Already have an account?{' '}
          <button className="auth-link-btn" onClick={() => navigate('/login')}>
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
