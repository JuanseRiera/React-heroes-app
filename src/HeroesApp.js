import React, { useReducer, useEffect } from "react";
import { AuthContext } from "./components/auth/AuthContext";
import { authReducer } from "./components/auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

export const HeroesApp = () => {
  const init = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return user;
    } else {
      return { logged: false };
    }
  };

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};
