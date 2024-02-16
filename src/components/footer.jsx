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
            <a href="tel:+251943535083">+251 943 535 083</a>
          </li>
          <li>
            {<IoMdHome className="home" />}
            <a
              href="https://www.google.com/maps/place/TechIno+Club/@11.0489364,39.7469392,17z/data=!4m6!3m5!1s0x16479dd051a0f277:0xf630674a681e9ba5!8m2!3d11.0489311!4d39.7495141!16s%2Fg%2F11ty71285r?entry=ttu"
              target="_blank"
            >
              Informatics Lab last floor
            </a>
          </li>   
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
