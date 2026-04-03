import { houses } from '../data/houses';

const Housinglist = () => {
  return (
    <div>
      <h2>Housing List</h2>

      {houses.map((house) => (
        <div key={house.id}>
          <img src={house.imagen} alt={house.title} />
          <h3>{house.title}</h3>
          <p>Price: ${house.price}</p>
          <p>Distance: {house.distance} km</p>
          <p>Type: {house.type}</p>
          <p>Description: {house.description}</p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Housinglist;
