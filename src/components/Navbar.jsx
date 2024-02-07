import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logo from "./images/circular logos.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

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
          <RxCross2 className="hamburger_menu" />
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
