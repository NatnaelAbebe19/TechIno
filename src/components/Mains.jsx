import React from "react";
import Back from "./images/back.mp4";
import Blog from "./Blog";

export default function Mains() {
  return (
    <>
      <main className="main--container">
        <div className="hero-section">
          <video autoPlay loop mmuted playsInline>
            <source src={Back} type="video/mp4" />
          </video>
        </div>
        <div className="member-adding">
          <h1 className="techino">
            <span className="techlogo">&equiv;</span>TECH<em>INO</em>
          </h1>
          <h1 className="main--header">Let's Talk About The Future!</h1>
          <button className="bn5">Be a Member</button>
        </div>
      </main>
      <Blog />
    </>
  );
}
