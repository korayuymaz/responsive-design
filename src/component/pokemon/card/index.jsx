import PropTypes from "prop-types";
import { useFetch } from "../../../hooks/useFetch";

const PokeCard = ({ pokemon: { name, url } }) => {
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <h3>{name.toUpperCase()}</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <img src={data.sprites.front_default} alt={name} />
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
          <p>
            Types:
            {data.types.map((type) => (
              <span key={type.slot}>{type.type.name}</span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokeCard;
