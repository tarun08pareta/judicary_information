import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private= () => {
  let Login = false;
  let log = {};
  if (localStorage.getItem("user")) {
    log = JSON.parse(localStorage.getItem("user"));
    Login=log.login;
  }
  return Login ? <Outlet /> : <Navigate to="Login" />;
};

export default React.memo(Private);
