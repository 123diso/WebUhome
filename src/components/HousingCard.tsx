import { useState } from 'react';
import type { House } from '../types/House';
import './HousingCard.css';

interface Props {
  house: House;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const HousingCard = ({ house, isFavorite, onToggleFavorite }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (!house.images) return;
    setCurrentImage((prev) => (prev === house.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!house.images) return;
    setCurrentImage((prev) => (prev === 0 ? house.images.length - 1 : prev - 1));
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {'⭐'.repeat(fullStars)}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="card">
      {/* IMAGE */}
      <div className="card-image">
        <img src={house.images[currentImage]} alt={house.title} />

        <span className="price">From ${house.price}/month</span>

        {house.images && (
          <>
            <button className="arrow left" onClick={prevImage}>
              ‹
            </button>
            <button className="arrow right" onClick={nextImage}>
              ›
            </button>
          </>
        )}

        <button className="favorite-btn" onClick={() => onToggleFavorite(house.id)}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      {/* CONTENT */}
      <div className="card-content">
        {/* HEADER */}
        <div className="card-header">
          <h3>{house.title}</h3>

          <div className="right-section">
            <div className="rating">
              <span className="rating-number">{house.rating}</span>
              <span className="stars">{renderStars(house.rating)}</span>
            </div>

            {/* 🔥 BURBUJAS AHORA DEPENDEN DE ESTE CONTENEDOR */}
            <div className="bubbles">
              <div className="bubble blue">🛏 {house.beds}</div>
              <div className="bubble orange">🛁 {house.baths}</div>
              <div className="bubble green">🚇 {house.transport}</div>
            </div>
          </div>
        </div>

        <p className="distance">{house.distance} min from campus</p>
        <p className="type">{house.type}</p>
        <p className="description">{house.description}</p>

        <a className="more-info">More info...</a>
      </div>
    </div>
  );
};

export default HousingCard;
