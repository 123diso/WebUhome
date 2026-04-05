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

  return (
    <div className="card">
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

      <div className="card-content">
        <h3>{house.title}</h3>

        <p className="distance">{house.distance} min from campus</p>

        <p className="type">{house.type}</p>

        <p className="description">{house.description}</p>

        <a className="more-info">More info...</a>
      </div>
    </div>
  );
};

export default HousingCard;
