import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from "./images/circular logos.png";
import debounce from "lodash.debounce";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenWidth(window.innerWidth);
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [screenWidth]);

  function handleHamburger() {
    setShowMenu((prev) => !prev);
  }

  return (
    <nav className="menu-items">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo of TECHINO" className="logo__image" />
        </Link>
      </div>
      <div className={`hamburger `} onClick={handleHamburger}>
        {showMenu ? (
          <ImCross className="hamburger_menux" />
        ) : (
          <GiHamburgerMenu className="hamburger_menu" />
        )}
      </div>

      <ul className={showMenu ? "open" : "close"}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/event"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          Event
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          Signup
        </NavLink>
      </ul>
    </nav>
  );
}
