import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://i.imgur.com/eTmWoAN.png" alt="pizza" width={400} />
        </div>
        <div>
          <img src="https://i.imgur.com/DupGBz5.jpg" alt="Salad" width={400} />
        </div>
        <div>
          <img src="https://i.imgur.com/93ekwW0.jpg" alt="gnochi" width={400} />
        </div>
        <div>
          <img
            src="https://i.imgur.com/ClxOafl.jpg"
            alt="lasagne"
            width={400}
          />
        </div>
        <div>
          <img
            src="https://i.imgur.com/LoG39wK.jpg"
            alt="Hamburger"
            width={400}
          />
        </div>
        <div>
          <img src="https://i.imgur.com/yrgzA9x.jpg" alt="cake" width={400} />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
