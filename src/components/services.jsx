import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Datas from "./servicesData";

export default function services() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  // const [isVisible, setIsvisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById("services--containers");
  //     const position = element.getBoundingClientRect();
  //     // console.log(position);
  //     if (position.top >= 0 && position.bottom <= window.innerHeight) {
  //       setIsvisible(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <div
      className={`services--container`}
    >
      <h1 className="services--header">Services we provide</h1>
      <Slider {...settings}>
        {Datas.map((Data) => (
          <div className="services">
            <div className="services--image">
              <img
                src={Data.imag}
                alt={`image of ${Data.title}`}
                className="services--img"
              />
            </div>
            <div className="service--message">
              <div className="services--title">{Data.title}</div>
              <div className="services--description">{Data.description}</div>
              <button className="service--btn">
                <a href="#" className="service--btn--link">
                  <span>Get Started</span>
                </a>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
