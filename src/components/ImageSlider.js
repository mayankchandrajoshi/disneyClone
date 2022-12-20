import React from 'react';
import './ImageSlider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const images=[
        '/images/slider-badging.jpg',
        '/images/slider-badag.jpg'
    ];

    return (
        <Slider {...settings} className='mt-8 z-20'>
            {
                images.map((image,index)=>{
                    return (
                        <div key={index}>
                            <img src={`${image}`}  className="w-full h-full rounded-lg shadow-[0_26px_30px_-10px_rgba(0,0,0,0.69),0_16px_10px_-10px_rgba(0,0,0,0.73)] border-2 border-solid border-transparent hover:border-2 hover:border-[rgba(249,249,249,0.8)] transition-all"/>    
                        </div>
                    )
                })
            }
        </Slider>
  )
}

export default ImageSlider;
