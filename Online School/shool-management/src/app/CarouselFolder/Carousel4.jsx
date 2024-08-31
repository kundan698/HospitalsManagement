import React from "react";
import Slider from "react-slick";

function Carousel4() {
  var settings = {
   
    infinite: true,
    
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 2000,
    autoplaySpeed: 2000,
   
    autoplay:true,
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
         <img src="https://www.classter.com/wp-content/uploads/2022/04/ali-logo.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/10/palladio-logo-150x150-1.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/10/euc-logo.png.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/10/vebs-logo-scaled.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/10/sharjah-logo-square.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/10/fermatta-logo.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/10/palladio-logo-150x150-1.webp" alt="" />
        </div>
        <div>
          <img src="https://www.classter.com/wp-content/uploads/2022/04/ali-logo.webp" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default  Carousel4;
