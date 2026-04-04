import { houses } from '../data/houses';
import HousingCard from './HousingCard';
import { useState } from 'react';

const Housinglist = () => {
  const [search, setsearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [maxDistance, setMaxDistance] = useState(50);
  const [propertyType, setPropertyType] = useState('');
  const [lifeStyle, setLifeStyle] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [extraFilters, setExtraFilters] = useState<string[]>([]);

  const handleExtraFilter = (filter: string) => {
    if (extraFilters.includes(filter)) {
      setExtraFilters(extraFilters.filter((f) => f !== filter));
    } else {
      setExtraFilters([...extraFilters, filter]);
    }
  };

  const filteredHouses = houses.filter(
    (house) =>
      house.title.toLowerCase().includes(search.toLowerCase()) &&
      house.price <= maxPrice &&
      house.distance <= maxDistance &&
      (propertyType === '' || house.type === propertyType) &&
      (lifeStyle === '' || house.lifeStyle === lifeStyle)
  );

  return (
    <div>
      <h2>Housing List</h2>

      {/*search*/}
      <input
        type="text"
        placeholder="Search housing ..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      {/*price filter*/}
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

      {/*distance filter */}
      <div>
        <label> Max distance: {maxDistance} km</label>
        <input
          type="range"
          min="0"
          max="50"
          value={maxDistance}
          onChange={(e) => setMaxDistance(Number(e.target.value))}
        />
      </div>

      {/*property type */}
      <div>
        <label>Property Type</label>
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="">All</option>
          <option value="House">House</option>
          <option value="Room">Room</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>

      {/*lifestyle */}
      <div>
        <label>Lifestyle</label>
        <select value={lifeStyle} onChange={(e) => setLifeStyle(e.target.value)}>
          <option value="">All</option>
          <option value="quiet">Quiet</option>
          <option value="social">Social</option>
          <option value="nightlife">Nightlife</option>
        </select>
      </div>

      {/*extra filters*/}
      <button onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>
      {showFilters && (
        <div>
          <label>
            <input type="checkbox" onChange={() => handleExtraFilter('shared')} />
            Shared
          </label>
          <label>
            <input type="checkbox" onChange={() => handleExtraFilter('private')} />
            Private
          </label>
          <label>
            <input type="checkbox" onChange={() => handleExtraFilter('furnished')} />
            Furnished
          </label>
          <label>
            <input type="checkbox" onChange={() => handleExtraFilter('unfurnished')} />
            Unfurnished
          </label>
          <label>
            <input type="checkbox" onChange={() => handleExtraFilter('petFriendly')} />
            Pet Friendly
          </label>
        </div>
      )}

      {filteredHouses.map((house) => (
        <HousingCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default Housinglist;
