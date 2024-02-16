import React from "react";
import Back from "./images/back.mp4";
import Blog from "./Blog";
import Services from "./services";
import Projects from "./projects";
import { Link, NavLink } from "react-router-dom";
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
          <button className="bn5">
            <NavLink to="/signup">Be a Member</NavLink>
          </button>
        </div>
      </main>
      <Services />
      <Projects />
      <Blog />
    </>
  );
}
