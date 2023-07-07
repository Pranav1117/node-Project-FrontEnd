import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign.css";
import { Link } from "react-router-dom";
import axios from "axios";
let storedData = [];
const LoginPage = () => {
  const nav = useNavigate();

  const [userLoginData, setUserLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempObj = {
      name: userLoginData.name,
      email: userLoginData.email,
      password: userLoginData.password,
    };

    storedData.push(tempObj);

    await axios
      .post("http://localhost:8000/login", tempObj)
      .then((res) => {
        const status = res.data;
        console.log(status);
        nav("/", { state: status });
      })
      .catch((err) => {
        console.log(err);
      });

    setUserLoginData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <Link to="/" className="back-btn">
        Go Back
      </Link>

      <h3>LoginPage</h3>
      <hr />
      <form action="" method="post">
        <h3 className="text-sign-up">Login In</h3>

        <label>Email :</label>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={userLoginData.email}
          onChange={handleOnChange}
        />

        <label>Password :</label>
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={userLoginData.password}
          onChange={handleOnChange}
        />

        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
