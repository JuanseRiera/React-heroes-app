import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  if (name) {
    let heroess = heroes.filter((x) =>
      x.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    if (heroess) {
      return heroess;
    } else {
      return [];
    }
  } else {
    return [];
  }
};
