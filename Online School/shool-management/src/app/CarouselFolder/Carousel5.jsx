import React from "react";
import Slider from "react-slick";

function Carousel5() {
  var settings = {
   
    infinite: true,
    
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    
    cssEase: "linear",
   
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
         <img src="https://www.classter.com/wp-content/uploads/2023/10/gc-school-logo-square-no-bg.png.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/11/bcc.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/08/gs4e-new.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/03/mount-olive-baptist-church-logo.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/09/xtmpi-logo-full.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/02/fes-logo.webp" alt="" />
        </div>
        <div>
         <img src="https://www.classter.com/wp-content/uploads/2023/08/gs4e-new.webp" alt="" />
        </div>
        <div>
          <img src="https://www.classter.com/wp-content/uploads/2023/06/MCAST-black.webp" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default  Carousel5;
