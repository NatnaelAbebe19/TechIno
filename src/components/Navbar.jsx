import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbLetterX } from "react-icons/tb";
import logo from "./images/circular logos.png";

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

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
console.log(showMenu);
  // const menuStyle = {
  //   // display: isOpen ? "block" : "none",
  // };
  return (
    // <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
    //   <div className="nav--container">
    //     <img src={logo} className="logo--image" />
    //     <div className="hamburger-icon" onClick={toggleMenu}>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </div>

    <nav className="menu-items">
      <div className={`hamburger `} onClick={handleHamburger}>
        {/* {showMenu ? (
          <TbLetterX className="hamburger_menu" />
        ) : ( */}
        <GiHamburgerMenu className="hamburger_menu" />
        {/* )} */}
      </div>

      {/* {showMenu && ( */}
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
      {/* )} */}
    </nav>
    // )}
    // </div>
  );
}
