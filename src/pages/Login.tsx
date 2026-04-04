import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import uhomeLogo from '../assets/imgLogin/Uhome.png';
import mailIcon from '../assets/imgLogin/mail.png';
import passwordIcon from '../assets/imgLogin/Passwo.png';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src={uhomeLogo} alt="UHome" className="auth-logo" />

        <p className="auth-subtitle">Find your place, fit your lifestyle</p>

        <hr className="auth-divider" />

        <div className="auth-form">
          <div className="auth-input-wrapper">
            <div className="auth-icon-image">
              <img src={mailIcon} alt="Email icon" className="auth-icon-img" />
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
              <img src={passwordIcon} alt="Password icon" className="auth-icon-img" />
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

          <label className="auth-checkbox-row">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>

          <button className="auth-submit" onClick={() => navigate('/')}>
            Log in
          </button>
        </div>

        <div className="auth-link-block">
          <button className="auth-secondary-link">Forgot password?</button>
        </div>

        <hr className="auth-divider" />

        <p className="auth-link-text">
          New here?{' '}
          <button className="auth-link-btn" onClick={() => navigate('/register')}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
