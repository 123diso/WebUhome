import { houses } from '../data/houses';
import HousingCard from './HousingCard';
import { useState } from 'react';
import './HousingList.css';
import FiltersBar from './FiltersBar';

const Housinglist = () => {
  const [search, setsearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [maxDistance, setMaxDistance] = useState(50);
  const [propertyType, setPropertyType] = useState('');
  const [lifeStyle, setLifeStyle] = useState('');
  const [extraFilters, setExtraFilters] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredHouses = houses.filter(
    (house) =>
      house.title.toLowerCase().includes(search.toLowerCase()) &&
      house.price <= maxPrice &&
      house.distance <= maxDistance &&
      (propertyType === '' || house.type === propertyType) &&
      (lifeStyle === '' || house.lifeStyle === lifeStyle) &&
      (extraFilters.length === 0 ||
        extraFilters.every((filter) => {
          if (filter === 'shared') return house.shared;
          if (filter === 'private') return house.private;
          if (filter === 'furnished') return house.furnished;
          if (filter === 'unfurnished') return house.unfurnished;
          if (filter === 'petFriendly') return house.petFriendly;
          return true;
        }))
  );

  return (
    <div className="container">
      <h2 className="results">{filteredHouses.length} options available</h2>
      <hr className="divider" />

      <FiltersBar
        search={search}
        setsearch={setsearch}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        maxDistance={maxDistance}
        setMaxDistance={setMaxDistance}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        lifeStyle={lifeStyle}
        setLifeStyle={setLifeStyle}
        extraFilters={extraFilters}
        setExtraFilters={setExtraFilters}
      />

      <div className="housing-grid">
        {filteredHouses.map((house) => (
          <HousingCard
            key={house.id}
            house={house}
            isFavorite={favorites.includes(house.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Housinglist;
