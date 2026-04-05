import { useState, useEffect } from 'react';
import './filtersBar.css';

interface Props {
  search: string;
  setsearch: (value: string) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
  maxDistance: number;
  setMaxDistance: (value: number) => void;
  propertyType: string;
  setPropertyType: (value: string) => void;
  lifeStyle: string;
  setLifeStyle: (value: string) => void;
  extraFilters: string[];
  setExtraFilters: (filters: string[]) => void;
}

const FiltersBar = ({
  search,
  setsearch,
  maxPrice,
  setMaxPrice,
  maxDistance,
  setMaxDistance,
  propertyType,
  setPropertyType,
  lifeStyle,
  setLifeStyle,
  extraFilters,
  setExtraFilters,
}: Props) => {
  const [open, setOpen] = useState<string | null>(null);
  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setOpen(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleExtra = (filter: string) => {
    if (extraFilters.includes(filter)) {
      setExtraFilters(extraFilters.filter((f) => f !== filter));
    } else {
      setExtraFilters([...extraFilters, filter]);
    }
  };

  return (
    <div className="filters-bar">
      {/* SEARCH */}
      <input
        className="search"
        type="text"
        placeholder="Search housing..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      <div className="chips">
        {/* PRICE */}
        <div
          className="chip purple"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(open === 'price' ? null : 'price');
          }}
        >
          Price ⌄
          {open === 'price' && (
            <div className="dropdown" onClick={(e) => e.stopPropagation()}>
              <span>${maxPrice}</span>
              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          )}
        </div>

        {/* DISTANCE */}
        <div
          className="chip orange"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(open === 'distance' ? null : 'distance');
          }}
        >
          Distance ⌄
          {open === 'distance' && (
            <div className="dropdown" onClick={(e) => e.stopPropagation()}>
              <span>{maxDistance} km</span>
              <input
                type="range"
                min="0"
                max="50"
                value={maxDistance}
                onChange={(e) => setMaxDistance(Number(e.target.value))}
              />
            </div>
          )}
        </div>

        {/* TYPE */}
        <div
          className="chip green"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(open === 'type' ? null : 'type');
          }}
        >
          {propertyType || 'Type'} ⌄
          {open === 'type' && (
            <div className="dropdown" onClick={(e) => e.stopPropagation()}>
              <div onClick={() => setPropertyType('')}>All</div>
              <div onClick={() => setPropertyType('House')}>House</div>
              <div onClick={() => setPropertyType('Room')}>Room</div>
              <div onClick={() => setPropertyType('Apartment')}>Apartment</div>
            </div>
          )}
        </div>

        {/* LIFESTYLE */}
        <div
          className="chip pink"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(open === 'lifestyle' ? null : 'lifestyle');
          }}
        >
          {lifeStyle || 'Lifestyle'} ⌄
          {open === 'lifestyle' && (
            <div className="dropdown" onClick={(e) => e.stopPropagation()}>
              <div onClick={() => setLifeStyle('')}>All</div>
              <div onClick={() => setLifeStyle('quiet')}>Quiet</div>
              <div onClick={() => setLifeStyle('social')}>Social</div>
              <div onClick={() => setLifeStyle('nightlife')}>Nightlife</div>
            </div>
          )}
        </div>

        {/* EXTRA FILTER BUTTON */}
        <div className="chip extra" onClick={() => setShowExtras(!showExtras)}>
          More Filters ⌄
        </div>
      </div>

      {/* EXTRA FILTERS */}
      {showExtras && (
        <div className="extra-filters">
          {['shared', 'private', 'furnished', 'unfurnished', 'petFriendly'].map(
            (filter) => (
              <div
                key={filter}
                className={`extra-chip ${extraFilters.includes(filter) ? 'active' : ''}`}
                onClick={() => toggleExtra(filter)}
              >
                {filter}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default FiltersBar;
