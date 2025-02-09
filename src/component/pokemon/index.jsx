import PropTypes from "prop-types";
import { useFetch } from "../../hooks/useFetch";
import { lazy, Suspense } from "react";

const PokeCard = lazy(() => import("./card"));

const Pokemon = ({ displayType }) => {
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  return (
    <div className="pokemon">
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
      <div className={displayType}>
        {data &&
          data.results.map((pokemon) => (
            <Suspense key={pokemon.name} fallback={<p>Yükleniyor...</p>}>
              <PokeCard pokemon={pokemon} />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  displayType: PropTypes.string.isRequired,
};

export default Pokemon;
