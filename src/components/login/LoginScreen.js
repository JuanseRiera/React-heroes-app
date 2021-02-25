import React from "react";

export const LoginScreen = ({ history }) => {
  const login = () => {
    history.replace("/");
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
