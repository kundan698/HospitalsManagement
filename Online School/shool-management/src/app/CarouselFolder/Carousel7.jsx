import React from "react";
import Slider from "react-slick";

function Carousel7() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
        <div>
            <img src="https://www.classter.com/wp-content/uploads/2023/02/MCAST-color-286x139.webp" alt="" />
        </div>
        </div>
        <div>
        <div>
            <img src="https://www.classter.com/wp-content/uploads/2023/02/MED-230x160.webp" alt="" />
        </div>
        </div>
        <div>
        <div>
            <img src="https://www.classter.com/wp-content/uploads/2023/02/MED-230x160.webp" alt="" />
        </div>
        </div>
        <div>
        <div>
            <img src="https://www.classter.com/wp-content/uploads/2023/02/hyper_island-logo-284x160.webp" alt="" />
        </div>
        </div>
        <div>
        <div>
            <img src="https://www.classter.com/wp-content/uploads/2024/06/portobello-logo-194x160.webp" alt="" />
        </div>
        </div>
        <div>
        <div>
            <img src="https://www.classter.com/wp-content/uploads/2023/03/mount-olive-baptist-church-logo-244x91.webp" alt="" />
        </div>
        </div>
        <div>
        <div>
            <img src="https://www.classter.com/wp-content/uploads/2024/08/tmai-new-small-180x180.webp" alt="" />
        </div>
        </div>
        <div>
        <div>
            <img src="https://www.classter.com/wp-content/uploads/2023/02/ucreativa-testimonial-logo-1-226x146.webp" alt="" />
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel7;
