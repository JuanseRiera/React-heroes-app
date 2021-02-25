import React from "react";
import { HeroesList } from "../heroes/HeroesList";

export const DCScreen = () => {
  const publisher = "DC Comics";
  return (
    <div>
      <h1>DCScreen</h1>
      <hr />

      <HeroesList publisher={publisher} />
    </div>
  );
};
