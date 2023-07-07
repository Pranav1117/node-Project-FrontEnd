import React from "react";
import { useEffect, useState } from "react";
//import { data } from "../Utilities/ContextApi/ContextData";
//import { useContext } from "react";
import axios from "axios";
import HeaderCompo from "../Components/HeaderCompo";
import "./Pages.css";
import { Link } from "react-router-dom";

function Bollywood() {
  //const [data] = useContext(data);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/data");
      // console.log(res);
      const response = res.data;
      console.log("res", response);
      setData(response);
      console.log(data, "data");
    } catch (err) {
      console.log(err, "errs");
    }
  };

  //const checkLoggedin = () => {};

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <HeaderCompo />
      <h2 className="page-titles-right">Bollywood Movies</h2>
      <div className="section-container">
        <div className="left-section">
          {" "}
          {data ? (
            data
              .filter((item) => item.category === "Bollywood")
              .map((i, index) => {
                console.log(i, index);
                return (
                  <div key={index} className="left-section-info-container">
                    <div className="left-section-avatar">
                      <Link to={`/article/${i.id}`}>
                        <img
                          className="pages-topics-images"
                          alt="logo"
                          src={i.image}
                        ></img>
                      </Link>
                    </div>
                    <div className="info">
                      <h2 className="left-section-name">{i.name}</h2>
                      <h3 className="left-section-date">
                        Release Date :{i.release}
                      </h3>
                      <h3 className="left-section-imdb">IMD'b:{i.IMDb}</h3>
                      <p className="left-section-para">{i.desc}</p>
                      <div className="left-sec-slash-wrapper">
                        <span className="left-sec-cat">
                          {i.category + " "} /
                        </span>
                        <span className="left-sec-postdate">
                          {" " + i.postdate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <h2>Loading</h2>
          )}
        </div>

        <div className="right-section">
          <h2 className="page-titles-left">Top Post</h2>
          {data ? (
            data
              .filter((item) => item.category === "Bollywood")
              .map((i, index) => {
                return (
                  <div key={index} className="right-section-info-container">
                    <div className="right-section-avatar">
                      <Link to={`/article/${i.id}`}>
                        <img
                          alt="logo"
                          src={i.image}
                          style={{
                            width: 200,
                            height: 150,
                            borderRadius: 10,
                            marginRight: 40,
                          }}
                        ></img>
                      </Link>
                    </div>
                    <div className="right-section-info">
                      <h3 className="right-section-name"> Name :{i.name}</h3>
                      <h4>IMDb:{i.IMDb}</h4>
                      <h4>{i.release}</h4>
                    </div>
                  </div>
                );
              })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
        <div className="advertisement-container">Advertisement</div>
      </div>
    </>
  );
}
export default Bollywood;
