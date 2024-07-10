import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const images = [
    "/banner/cr1.png",
    "/banner/cr2.jpg",
  ];

  return (
    <div className="container mx-auto my-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={process.env.PUBLIC_URL + image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;