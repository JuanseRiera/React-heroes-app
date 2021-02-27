import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const regresar = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  return (
    <div className="card mt-5 mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`../assets/heroes/${heroeId}.jpg`}
            alt={superhero}
            style={{ maxWidth: 300 }}
            className="animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Alter ego: </b>
                {alter_ego}
              </li>
              <li className="list-group-item">
                <b> Publisher: </b>
                {publisher}
              </li>
              <li className="list-group-item">
                <b>First appeareance: </b>
                {first_appearance}
              </li>
              <li className="list-group-item">
                <b>Characters: </b>
                {characters}
              </li>
            </ul>

            <div className="mt-3">
              <button className="btn btn-info" onClick={regresar}>
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
