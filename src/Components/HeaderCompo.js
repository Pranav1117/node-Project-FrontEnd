import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import "./Logo/logo.css";
import { Link } from "react-router-dom";
import '../Pages/sign.css'
const HeaderCompo = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <Logo />
      {show && <NavBar />}
      <img
        className="menu-icon"
        onClick={handleClick}
        src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
        alt="logo"
      />
      <div className="login-signup-container">
        <Link className="register-btn" to="/user/register">
          Register
        </Link>
        <Link className="login-btn" to={"/user/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default HeaderCompo;
