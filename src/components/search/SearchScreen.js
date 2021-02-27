import React, { useMemo } from "react";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);
  const { formState, changeInput } = useForm({ searchHero: q });

  const heroes = useMemo(() => getHeroesByName(q), [q]);
  const buscarSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${formState.searchHero}`);
  };

  return (
    <>
      <h2>Search Screen</h2>
      <hr />
      <div className="row mt-4">
        <div className="col-12 col-md-5 mb-3">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={buscarSubmit}>
            <input
              type="text"
              placeholder="Buscar heroe..."
              autoComplete="off"
              className="form-control"
              name="searchHero"
              value={formState.searchHero}
              onChange={changeInput}
            />

            <button type="submit" className="btn btn-info mt-2">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-12 col-md-7">
          <h4>Heroes encontrados:</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Busque un heroe</div>}

          {q !== "" && heroes.length === 0 && (
            <div className="alert alert-danger">No se encontro el heroe</div>
          )}

          <div className="no-gutters mb-5 animate__animated animate__bounceInUp">
            {heroes.map((hero) => {
              return <HeroCard key={hero.id} hero={hero} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
