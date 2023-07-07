import React from "react";
import { Link, useLocation } from "react-router-dom";
const AuthStatusPage = () => {
  const location = useLocation();
  const status = location.state;
  return (
    <>
      {" "}
      <h2 style={{ textAlign: "center" }}>{`${status} please login`}</h2>
      <Link className="login-link" to="/user/login">Login</Link>
    </>
  );
};

export default AuthStatusPage;
