import type { House } from '../types/House';
import './HousingCard.css';

interface Props {
  house: House;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const HousingCard = ({ house, isFavorite, onToggleFavorite }: Props) => {
  return (
    <div className="card">
      <img src={house.imagen} alt={house.title} />

      <div className="card-content">
        <h3>{house.title}</h3>
        <p>Price: ${house.price}</p>
        <p>Distance: {house.distance} km</p>
        <p>Type: {house.type}</p>
        <p>Description: {house.description}</p>
      </div>

      <button className="favorite-btn" onClick={() => onToggleFavorite(house.id)}>
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <hr />
    </div>
  );
};

export default HousingCard;
