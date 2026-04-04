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

        <p className="subtitle">{house.distance} min from campus</p>
        <p className="type">{house.type}</p>
        <p className="description"> {house.description}</p>
      </div>

      <button className="favorite-btn" onClick={() => onToggleFavorite(house.id)}>
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <span className="price">From ${house.price}/month</span>

      <hr />
    </div>
  );
};

export default HousingCard;
