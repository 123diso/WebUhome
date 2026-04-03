import { houses } from '../data/houses';
import HousingCard from './HousingCard';

const Housinglist = () => {
  return (
    <div>
      <h2>Housing List</h2>

      {houses.map((house) => (
        <HousingCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default Housinglist;
