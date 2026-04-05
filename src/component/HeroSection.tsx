import { useNavigate } from 'react-router-dom';
import '../styles/hero-section.css';
import distanceIcon from '../assets/distance.png';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleScrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartSearching = () => {
    navigate('/start'); // 👈 ahora va a tu página Start
  };

  return (
    <section className="hero">
      <div className="hero-bg-shape hero-bg-shape-1"></div>
      <div className="hero-bg-shape hero-bg-shape-2"></div>
      <div className="hero-bg-line hero-bg-line-1"></div>
      <div className="hero-bg-line hero-bg-line-2"></div>

      <div className="hero-container">
        <div className="hero-left">
          <h2>
            Find Student Housing
            <br />
            With Confidence.
          </h2>

          <p>
            Compare price, distance, safety and real student reviews – all in one place.
          </p>

          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary" onClick={handleStartSearching}>
              Start Searching
            </button>

            <button
              className="hero-btn hero-btn-secondary"
              onClick={handleScrollToHowItWorks}
            >
              See How It Works
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card hero-card-price">
            <span className="hero-card-label">Price</span>
            <strong>
              $450<span>/month</span>
            </strong>
            <small>Safety Score: 8.7</small>
          </div>

          <div className="hero-card hero-card-distance">
            <span className="hero-card-label">Distance</span>
            <strong>12 min walking</strong>
            <small>2.1 km away</small>

            <div className="hero-pin">
              <img src={distanceIcon} alt="distance icon" />
            </div>
          </div>

          <div className="hero-card hero-card-review">
            <span className="hero-card-label">Reviews</span>
            <strong>★4.5</strong>
            <div className="hero-stars">⭐⭐⭐⭐⭐</div>
            <small>Based on 32 students</small>
          </div>
        </div>
      </div>
    </section>
  );
}
