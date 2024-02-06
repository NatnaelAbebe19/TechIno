import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaTwitter, FaPhone } from "react-icons/fa6";
import { AiOutlineSound } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--heading">
        <h1>&equiv; TechIno</h1>
        <p>let's talk about the future</p>
        <AiOutlineSound className="emit" />
      </div>

      <div className="footer--service">
        <h2>Services</h2>
        <ul>
          <li>
            <IoIosCheckmarkCircle /> Website Developement
          </li>
          <li>
            <IoIosCheckmarkCircle />
            App Development
          </li>
          <li>
            <IoIosCheckmarkCircle />
            Sofware Maintenance
          </li>
          <li>
            <IoIosCheckmarkCircle />
            Graphic Design
          </li>
          <li>
            <IoIosCheckmarkCircle />
            Content Creating
          </li>
          <li>
            <IoIosCheckmarkCircle />
            Video Editing
          </li>
        </ul>
      </div>

      <div className="phone">
        <h2>Contacts</h2>
        <ul>
          <li>
            {<FaPhone />}
            <a href="tel:+251919172574">+251 919 172 574</a>
          </li>
          <li>
            {<FaPhone />}
            <a href="tel:+251919172574">+251 919 172 574</a>
          </li>
          <li>{<IoMdHome className="home" />}Informatics Lab last floor</li>
        </ul>
      </div>

      <div className="icons--container">
        <h2>Social Media</h2>
        <div className="icons">
          <a href="#">{<FaFacebookF />}</a>
          <a href="#">{<FaTwitter />}</a>
          <a href="https://t.me/techinoclubofficial" target="_blank">
            {<FaTelegramPlane />}
          </a>
          <a href="" target="_blank">
            {<FaInstagram />}
          </a>
          <a href="#">{<FaLinkedinIn />}</a>
        </div>
      </div>
      <div className="copy">&copy;2024 copyright</div>
    </footer>
  );
}
