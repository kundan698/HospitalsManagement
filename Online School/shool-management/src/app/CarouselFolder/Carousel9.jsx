"use client"
import React from "react";
import Slider from "react-slick";

function Carousel9() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
     autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2024/02/edtech-award-small.webp" alt=""  className="w-[100px]"/>
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/02/CCA-award.webp" alt=""  className="w-[100px]"/>
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2024/02/SESA-award-small.webp" alt=""  className="w-[100px]"/>
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2024/02/top-edtech-award-small.webp" alt="" className="w-[100px]" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2024/02/Venture-Impact-Award-small.webp" alt=""  className="w-[100px]"/>
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2024/02/leader-sourceforge-winter-2024-white.webp" alt=""  className="w-[100px]"/>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel9;
