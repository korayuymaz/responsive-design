import PropTypes from "prop-types";
import { useFetch } from "../../../hooks/useFetch";
import "./style.scss";

const PokeCard = ({ pokemon: { name, url } }) => {
  const { data, loading, error } = useFetch(url);

  return (
    <div className="poke-card">
      <h3 className="poke-card__header">{name.toUpperCase()}</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className="poke-card__body">
          <img src={data.sprites.front_default} alt={name} />
          <p className="poke-card__info">Height: {data.height}</p>
          <p className="poke-card__info">Weight: {data.weight}</p>
          <p className="poke-card__info">
            Types:
            {data.types.map((type) => (
              <div
                className={`poke-card__info--category ${type.type.name}`}
                key={type.slot}
              >
                <div key={type.slot}>{type.type.name}</div>
              </div>
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
