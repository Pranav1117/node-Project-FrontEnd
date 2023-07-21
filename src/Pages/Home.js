import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderCompo from "../Components/HeaderCompo";
import axios from "axios";
import "./sign.css";
//import { data } from "../Utilities/ContextApi/ContextData";
//import { useContext } from "react";
import "./home.css";
import "../global.css";
import { Link } from "react-router-dom";

function Home() {
  const location = useLocation();
  const status = location.state;
  console.log(status);

  const [value] = useState("value");

  const [data, setData] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchData = async () => {
    try {
      let res = await axios.get(
        "https://node-project-backend.onrender.com/data"
      );

      const response = res.data;
      setData(response);
    } catch (err) {
      console.log(err, "errs");
    }
  };

  const checkLoggedIn = async () => {
    const getToken = localStorage.getItem("token");
    const token = { token: getToken };

    try {
      let res = await axios.get("https://node-project-backend.onrender.com/checkloggedin", token);
      console.log(res.data, "checkinngg");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    checkLoggedIn();

    if (status === "Login succesfull") {
      setIsLoggedIn(true);
      return;
    } else {
      setIsLoggedIn(false);
    }

    console.log(data, "data");
  }, [location]);

  console.log(data);
  return (
    <>
      {/*console.log(data, "in return")*/}

      <HeaderCompo loggedin={isLoggedIn} />
      <div className="img-text-onhover">Click to Read more</div>
      <div className="homepage-main-images">
        <div className="homepage-main-big-image-container">
          {data ? (
            data
              .filter((item) => item.name === "Resident evil")
              .map((i, index) => {
                return (
                  <>
                    <img
                      alt="logo"
                      className="homepage-main-big-image"
                      src={i.image}
                    />
                  </>
                );
              })
          ) : (
            <h2>laoding</h2>
          )}
        </div>

        <div className="homepage-small-images">
          {data ? (
            data
              .filter(
                (item) => item.name === "Top Gun :Maverick",
                "Artificial Inteligence"
              )
              .map((i, index) => {
                return (
                  <>
                    <img
                      alt="logo"
                      src={i.image}
                      className="homepage-small-images1"
                    />
                  </>
                );
              })
          ) : (
            <h2>Loading</h2>
          )}
          <div>
            {data ? (
              data
                .filter((item) => item.name === "Artificial Inteligence")
                .map((i, index) => {
                  return (
                    <>
                      <img
                        alt="logo"
                        src={i.image}
                        className="homepage-small-images2"
                      />
                    </>
                  );
                })
            ) : (
              <h2>loading</h2>
            )}
          </div>
        </div>
      </div>

      <h2 className="home-page-headings">
        <span className="home-page-headings-underline"> Latest</span> Bollywood
        Stories
      </h2>
      <hr style={{ width: "90%" }} />
      <div className="homepage-bollystories-container">
        {data ? (
          data
            .filter((i) => i.category === "Bollywood")
            .map((item, index) => {
              return (
                <div key={index} className="homepage-bollystories">
                  <Link
                    className="none-underline"
                    to={`article/${item.id}`}
                    state={isLoggedIn}
                  >
                    <img
                      className="home-page-bolly-images"
                      alt="logo"
                      src={item.image}
                    />
                    <h2 className="bolly-movie-headings">{item.name}</h2>
                    <p className="topics-info">{item.IMDb}</p>
                    <p className="homepage-bolly-desc topics-desc">
                      {item.desc}
                    </p>
                  </Link>
                </div>
              );
            })
        ) : (
          <h2>loading</h2>
        )}
      </div>

      <h2 className="home-page-headings">
        <span className="home-page-headings-underline"> Latest</span> Hollywood
        Stories
      </h2>
      <hr style={{ width: "90%" }} />
      <div className="homepage-hollystories-container">
        <div className="homepage-advertise-container">Advertisement</div>
        {data ? (
          data
            .filter((i) => i.category === "Hollywood")
            .map((item, index) => {
              return (
                <div key={index} className="homepage-hollystories-wrapper">
                  <div className="home-hollywood-stories-img">
                    <Link
                      className="none-underline"
                      to={`article/${item.id}`}
                      state={isLoggedIn}
                    >
                      <img
                        className="home-page-bolly-images"
                        alt="logo"
                        src={item.image}
                      />
                    </Link>
                  </div>
                  <div className="home-hollywood-stories-desc">
                    <Link className="none-underline" to={`article/${item.id}`}>
                      {" "}
                      <h2 className="holly-movie-headings">{item.name}</h2>
                      <p>{item.IMDb}</p>
                      <p>{item.desc}</p>
                    </Link>
                  </div>
                </div>
              );
            })
        ) : (
          <h2>loading</h2>
        )}
      </div>

      <hr className="below-holly-hr" />

      <div className="toppost-flex">
        <div className="homepage-big-img-besidetoppost">
          {data ? (
            data
              .filter((i) => i.category === "Gaming" && i.id === 2)
              .map((item, index) => {
                return (
                  <>
                    <Link to={`article/${item.id}`}>
                      <img
                        className="homepage-big-img-besidetoppost-img"
                        src={item.image}
                        alt="logo"
                      />
                    </Link>
                  </>
                );
              })
          ) : (
            <h2>Loadinggg....</h2>
          )}
        </div>

        <div className="homepage-toppost-container">
          <h2 className="toppost-text">Top Post</h2>
          {data ? (
            data
              .filter((i) => i.category === "Technology" && i.id === 19)
              .map((item, index) => {
                return (
                  <div className="homepage-toppost-mainpost">
                    <Link to={`article/${item.id}`} state={isLoggedIn}>
                      <img
                        className="homepage-toppost-main-image"
                        alt="logo"
                        src={item.image}
                      />
                    </Link>
                    <div className="txt-adjust">
                      <Link
                        className="none-underline"
                        to={`article/${item.id}`}
                        state={isLoggedIn}
                      >
                        <h2 className="toppost-headings">{item.name}</h2>
                        <p className="toppost-desc">{item.desc}</p>
                      </Link>
                    </div>
                    <hr style={{ marginTop: 15, width: "90%" }} />
                  </div>
                );
              })
          ) : (
            <h2>loading</h2>
          )}

          <div className="homepage-toppost-smallpost-container">
            {data ? (
              data
                .filter((i) => i.category === "Technology")
                .map((item, index) => {
                  return (
                    <div className="homepage-toppost-smallpost">
                      <Link to={`article/${item.id}`} state={isLoggedIn}>
                        <img
                          alt="logo"
                          src={item.image}
                          style={{ width: 101, height: 104 }}
                        />
                      </Link>
                      <div className="homepage-toppost-smallpost-info">
                        <Link
                          className="none-underline"
                          to={`article/${item.id}`}
                          state={isLoggedIn}
                        >
                          <h2 className="headings">{item.name}</h2>
                          <p>{item.desc}</p>
                        </Link>
                      </div>
                    </div>
                  );
                })
            ) : (
              <h2>loading</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
