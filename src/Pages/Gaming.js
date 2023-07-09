import React from "react";
//import { useContext } from "react";
//import { data } from "../Utilities/ContextApi/ContextData";
import axios from "axios";
import { useState, useEffect } from "react";
import HeaderCompo from "../Components/HeaderCompo";
import { Link } from "react-router-dom";
function Gaming() {
  //const [data] = useContext(data);
  const [data, setData] = useState(null);
  const [value] = useState("value");

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

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [value]);
  return (
    <>
      <HeaderCompo />
      <h2 className="page-titles-right">Gaming Stories</h2>
      <div className="section-container">
        <div className="left-section">
          {" "}
          {data ? (
            data
              .filter((item) => item.category === "Gaming")
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
                      <p>{i.release}</p>
                      <p className="left-section-para">{i.desc}</p>
                      {/*<p>Desc :{i.content}</p>*/}
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
            <h2>Loading...</h2>
          )}
        </div>

        <div className="right-section">
          <h2 className="page-titles-left">Top Post</h2>
          {data ? (
            data
              .filter((item) => item.category === "Gaming")
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
                      <h3 className="right-section-name">Name :{i.name}</h3>

                      <h4>{i.Date}</h4>
                    </div>
                  </div>
                );
              })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className="advertisement-container">Advertisement</div>
      </div>
    </>
  );
}
export default Gaming;
