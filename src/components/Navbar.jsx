import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from "./images/circular logos.png";
import debounce from "lodash.debounce";

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
        <img src={logo} alt="logo of TECHINO" className="logo__image" />
      </div>
      <div className={`hamburger `} onClick={handleHamburger}>
        {showMenu ? (
          <ImCross className="hamburger_menux" />
        ) : (
          <GiHamburgerMenu className="hamburger_menu" />
        )}
      </div>

      <ul className={showMenu ? "open" : "close"}>
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Event</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
