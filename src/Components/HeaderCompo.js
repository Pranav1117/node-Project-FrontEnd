import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import "./Logo/logo.css";
import { Link } from "react-router-dom";
import "../Pages/sign.css";
const HeaderCompo = (props) => {
  const status = props.loggedin;
  //console.log(status);

  const [show, setShow] = useState(true);

  /*const [isLoggedIn, setIsLoggedIn] = useState(false);
   */

  useEffect(() => {
    //status ? setIsLoggedIn(true) : setIsLoggedIn(false);
    //console.log(status);
  }, [status]);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <Logo />
      {show && <NavBar status={status} />}
      <img
        className="menu-icon"
        onClick={handleClick}
        src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
        alt="logo"
      />
      {status ? (
        <div className="login-signup-container">
          <Link to="#" className="register-btn logout">
            Log Out
          </Link>
        </div>
      ) : (
        <div className="login-signup-container">
          <Link className="register-btn" to="/user/register">
            Register
          </Link>
          <Link className="login-btn" to={"/user/login"}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderCompo;
