import React, { useState, useEffect } from "react";
import HeaderCompo from "../Components/HeaderCompo";
import axios from "axios";
import "./sign.css";
//import { data } from "../Utilities/ContextApi/ContextData";
//import { useContext } from "react";
import "./home.css";
import "../global.css";
import { Link } from "react-router-dom";

function Home() {
  // const [data] = useContext(data);
  const [value] = useState("");
  const [data, setData] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/data");
      // console.log(res);
      const response = res.data;
      // console.log("res", response);
      setData(response);
      //setIsLoggedIn(true);
      //console.log(data, "data");
    } catch (err) {
      console.log(err, "errs");
    }
  };

  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <>
      {/*console.log(data, "in return")*/}

      <HeaderCompo />
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
                  <Link className="none-underline" to={`article/${item.id}`}>
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
                    <Link className="none-underline" to={`article/${item.id}`}>
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
      <div className="homepage-toppost-container">
        <h2 className="toppost-text">Top Post</h2>
        {data ? (
          data
            .filter((i) => i.category === "Technology" && i.id === 19)
            .map((item, index) => {
              return (
                <div className="homepage-toppost-mainpost">
                  <Link to={`article/${item.id}`}>
                    <img
                      className="homepage-toppost-main-image"
                      alt="logo"
                      src={item.image}
                    />
                  </Link>
                  <div className="txt-adjust">
                    <Link className="none-underline" to={`article/${item.id}`}>
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
                    <Link to={`article/${item.id}`}>
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
          <h2>loading</h2>
        )}
      </div>

      <h2 className="global-news-heading">
        <span className="home-page-headings-underline">Latest</span> Global News
      </h2>
      <hr className="news-hr" />

      <div className="homepage-news-container">
        {data ? (
          data
            .filter((i) => i.category === "News")
            .map((item, index) => {
              return (
                <div className="homepage-news-wrapper">
                  <div className="news">
                    <h3 className="news-bottom-border">{item.heading}</h3>
                    <p className="news-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })
        ) : (
          <h2>loading</h2>
        )}
      </div>
    </>
  );
}
export default Home;
