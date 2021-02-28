import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/login"
            isAuthenticated={user.logged}
            component={LoginScreen}
          />
          <PrivateRouter
            path="/"
            isAuthenticated={user.logged}
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};
