import React from "react";
import rightPng from "/contact svg.png";

export default function ContactUs() {
  return (
    <div className="contact--container">
      <div className="contact--info">
        <h2 className="contact--header">Get in touch</h2>
        <p>we are here for you! how can we help</p>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <input type="textarea" name="message" />
        </div>
        <button className="contact--btn bn5">Submit</button>
      </div>
      <div className="contact--image">
        <img
          src={rightPng}
          alt="this is jsut a png formated image that illustrates a contact places"
        />
      </div>
    </div>
  );
}
