import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MarvelScreen } from "../components/Marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DCScreen } from "../components/DC/DCScreen";
import { Navbar } from "../components/ui/NavBar";
import { SearchScreen } from "../components/search/SearchScreen";
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
