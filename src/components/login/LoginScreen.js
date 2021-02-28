import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../types/authTypes";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const login = () => {
    const path = localStorage.getItem("lastPath") || "";
    let action = {
      type: types.login,
      payload: {
        name: "Juanse",
      },
    };
    dispatch(action);
    history.replace(path);
  };
  return (
    <div className="container p-5">
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-info" onClick={login}>
        Login
      </button>
    </div>
  );
};
