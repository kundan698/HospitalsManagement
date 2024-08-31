import React from "react";
import Slider from "react-slick";

function Carousel2() {
  var settings = {
    dots: true,
    infinite: true,
   
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
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
                    <img src="https://www.classter.com/wp-content/uploads/2024/02/slashdot-leader-2024.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2024/02/sa-customer_support-2024.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2024/02/leader-sourceforge-winter-2024-white.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2024/02/ga-features_and_functionality-2024.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2024/02/ca-value-2024.webp" alt="" />
                </div>
        </div>
        <div>
        <div className='htp'>
                    <img src="https://www.classter.com/wp-content/uploads/2024/02/trusted-vendor-black.webp" alt="" />
                </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel2;
