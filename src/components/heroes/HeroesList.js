import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 animate__animated animate__bounceInUp">
        {heroes.map((hero) => (
          <div className="col-12 col-sm-6 col-md-6" key={hero.id}>
            <HeroCard hero={hero} />
          </div>
        ))}
      </div>
    </>
  );
};
