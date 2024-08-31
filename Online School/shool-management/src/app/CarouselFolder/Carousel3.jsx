import React from "react";
import Slider from "react-slick";

function Carousel3() {
  var settings = {
   
    infinite: true,
   
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 6,
    autoplay: true,
    speed: 2000,
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
                 <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/02/gita-testimonial-logo-e1694438570700.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/02/gs4e-testimonial-logo.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/02/AAN-testimonial-logo-1-e1694438550429.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/06/ahf-logo.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/02/tmai-testimonial-logo-1.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/02/rodion-pedia-testimonial-logo-e1694438594223.webp" alt="" />
                </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel3;
