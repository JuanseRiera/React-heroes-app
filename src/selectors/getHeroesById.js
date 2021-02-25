import { heroes } from "../data/heroes";

export const getHeroesById = (id) => {
  return heroes.find((x) => x.id === id);
};
