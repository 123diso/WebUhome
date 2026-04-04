import { houses } from '../data/houses';
import HousingCard from './HousingCard';
import { useState } from 'react';

const Housinglist = () => {
  const [search, setsearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredHouses = houses.filter(
    (house) =>
      house.title.toLowerCase().includes(search.toLowerCase()) && house.price <= maxPrice
  );

  return (
    <div>
      <h2>Housing List</h2>

      <input
        type="text"
        placeholder="Search housing ..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      <div>
        <label>Max Price: ${maxPrice}</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      {filteredHouses.map((house) => (
        <HousingCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default Housinglist;
