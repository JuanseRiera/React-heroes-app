import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  console.log(publisher);
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (validPublisher.includes(publisher)) {
    return heroes.filter((x) => x.publisher === publisher);
  } else {
    return [];
  }
};
