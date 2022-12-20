import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'


function MoviesSlider({selectMovie}) {
    
    const settings ={
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
    <Slider {...settings}>
    {
        selectMovie.map((movie,index)=>{
        return (
            <Link to={`/details:${movie.id}`} key={index}>
            <div className="p-4 lg:p-6">
                <img src={`${movie.CardImg}`}  className="cursor-pointer w-full h-full rounded-[8px]  shadow-[0_26px_30px_-10px_rgba(0,0,0,0.69),0_16px_10px_-10px_rgba(0,0,0,0.73)]  border-2 border-solid border-transparent
                hover:scale-110
                hover:shadow-[0_40px_38px_-16px_rgba(0,0,0,0.80),0_30px_22px_-10px_rgba(0,0,0,0.72)]
                transition-all transition-duration: 500ms hover:border-0"/>    
            </div>
            </Link>
        )
    })
    }
</Slider>
  )
  ;
}

export default MoviesSlider;
