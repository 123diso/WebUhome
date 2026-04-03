import type { House } from '../types/House';

interface Props {
  house: House;
}

const HousingCard = ({ house }: Props) => {
  return (
    <div>
      <img src={house.imagen} alt={house.title} />
      <h3>{house.title}</h3>
      <p>Price: ${house.price}</p>
      <p>Distance: {house.distance} km</p>
      <p>Type: {house.type}</p>
      <p>Description: {house.description}</p>
      <hr />
    </div>
  );
};

export default HousingCard;
