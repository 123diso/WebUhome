import { houses } from '../data/houses';
import HousingCard from '../components/HousingCard';

interface Props {
  favorites: number[];
}

const Favorites = ({ favorites }: Props) => {
  const favoriteHouses = houses.filter((house) => favorites.includes(house.id));

  return (
    <div className="container">
      <h2>Favorites</h2>

      {favoriteHouses.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="housing-grid">
          {favoriteHouses.map((house) => (
            <HousingCard
              key={house.id}
              house={house}
              isFavorite={true}
              onToggleFavorite={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
