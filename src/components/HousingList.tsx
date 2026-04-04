import { houses } from '../data/houses';
import HousingCard from './HousingCard';
import { useState } from 'react';

const Housinglist = () => {
  const [search, setsearch] = useState('');

  const filteredHouses = houses.filter((house) =>
    house.title.toLowerCase().includes(search.toLowerCase())
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

      {filteredHouses.map((house) => (
        <HousingCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default Housinglist;
