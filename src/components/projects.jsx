import React, { useState } from "react";
import oneCard from "./images/oneCard.jpg";
import Datas from "./Projectstdata";

export default function projects() {
  const [showMore, setShowMore] = useState(-1);
  // const [close, setClose] = useState(false);
  function handleClick(index) {
    setShowMore(index);
  }
  function handleClose() {
    setShowMore(-1);
  }

  return (
    <section className="project--container--main">
      <h1 className="porjects--header">Projects we recently developed</h1>
      {Datas.map((data, index) => (
        <div className="project--container" key={index}>
          <div className="project--image--container">
            <img src={data.image} alt={data.title} className="project--image" />

            <button
              className="project--button bn5"
              onClick={() => handleClick(index)}
            >
              Read More
            </button>
            <div className="project--described">
              <h1 className="title--first">{data.title}</h1>
              <p className="description--first">{data.description}</p>
            </div>
            {showMore == index && (
              <div className="messageDialog">
                <div className="inner--popup">
                  <p className="description--mobile">{data.description}</p>
                  <span className="description--close" onClick={handleClose}>
                    x
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
{
  /* <button className="project--button bn5">Read More</button> */
}
{
  /* <div className="project--description">
            <div className="project--title">
            </div>
            <div className="project--text">
            </div>
          </div> */
}
