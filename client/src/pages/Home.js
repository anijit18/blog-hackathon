import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} className="carousel-slider">
        <div className="carousel-item">
          <img
            className="carousel-image"
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <div className="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-image"
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />
          <div className="carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-image"
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
          <div className="carousel-caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </Slider>
    
    </div>
  );
};

export default Carousel;
