
import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
        <div className='argument'>
                        <div className='flex gap-5 mt-[20%] mx-10'>
                            <img src="https://www.classter.com/wp-content/uploads/2023/02/gita-testimonial-logo-e1694438570700.webp" alt=""  className='w-[100px]'/>
                            <h5 className='text-[20px] font-bold'>Sockrets.M
                                <p>Director,XTMPI</p>
                            </h5>
                        </div>
                        <p className='text-[18px] p-4'>“A great experience built on professionalism and trust.”</p>
                      </div>
              
        </div>
        <div>
        <div className='argument'>
                        <div className='flex gap-5 mt-[20%] mx-10'>
                            <img src="https://www.classter.com/wp-content/uploads/2023/09/tmai-logo.webp" alt=""  className='w-[100px]'/>
                            <h5 className='text-[20px] font-bold'> Sabka B.
                                <p>Head of Operations, GS4E</p>
                            </h5>
                        </div>
                        <p className='text-[18px] p-4'>“The benefits of using this software is that you can manage, teach and administrate your school by only using this software. Teachers can manage their class and students have access to lessons from their home.”</p>
                      </div>
              
        </div>
        <div>
        <div className='argument'>
                        <div className='flex gap-5 mt-[20%] mx-10'>
                            <img src="https://www.classter.com/wp-content/uploads/2022/02/american.webp" alt=""  className='w-[100px]'/>
                            <h5 className='text-[20px] font-bold'>Sockrets.M
                                <p>Director,XTMPI</p>
                            </h5>
                        </div>
                        <p className='text-[18px] p-4'>“A great experience built on professionalism and trust.”</p>
                      </div>
              
        </div>
        <div>
        <div className='argument'>
                        <div className='flex gap-5 mt-[20%] mx-10'>
                            <img src="https://www.classter.com/wp-content/uploads/2022/02/american.webp" alt=""  className='w-[100px]'/>
                            <h5 className='text-[20px] font-bold'>Sockrets.M
                                <p>Director,XTMPI</p>
                            </h5>
                        </div>
                        <p className='text-[18px] p-4'>“A great experience built on professionalism and trust.”</p>
                      </div>
              
        </div>
        <div>
        <div className='argument'>
                        <div className='flex gap-5 mt-[20%] mx-10'>
                            <img src="https://www.classter.com/wp-content/uploads/2022/02/american.webp" alt=""  className='w-[100px]'/>
                            <h5 className='text-[20px] font-bold'>Sockrets.M
                                <p>Director,XTMPI</p>
                            </h5>
                        </div>
                        <p className='text-[18px] p-4'>“A great experience built on professionalism and trust.”</p>
                      </div>
              
        </div>
       
      </Slider>
    </div>
  );
}

export default Responsive;
