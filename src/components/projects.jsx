import React from "react";
import oneCard from "./images/oneCard.jpg";
import Datas from "./Projectstdata";

export default function projects() {
  return (
    <section className="project--container--main">
      <h1 className="porjects--header">Projects we recently developed</h1>
      {Datas.map((data) => (
        <div className="project--container">
          <div className="project--image">
            <img src={data.image} alt="One Card" className="project--image" />
          </div>
          <div className="project--description">
            <div className="project--title">
              <h1>{data.title}</h1>
            </div>
            <div className="project--text">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
