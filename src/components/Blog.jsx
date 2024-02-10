import React from "react";
import Slider from "react-slick";
import Datas from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blog() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="profile--container">
      <Slider {...settings}>
        {Datas.map((Data) => (
          <div className="profile">
            <div className="profile--image">
              <img src={Data.imag} alt={`image of ${Data.name}`} />
            </div>
            <div className="profile--notation">
              <p className="profile--name">{Data.name}</p>
              <p className="profile--description">{Data.description}</p>
              <a className="profile--btn1 profile--btn2">Read More</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Blog;
