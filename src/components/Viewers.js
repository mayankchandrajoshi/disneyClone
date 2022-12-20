import React from 'react';

function Viewers() {
    const images=[
        '/images/viewers-disney.png',
        '/images/viewers-pixar.png',
        '/images/viewers-marvel.png',
        '/images/viewers-starwars.png',
        '/images/viewers-national.png',
    ]
    return (
        <div className="mt-12 grid grid-cols-5 gap-10 pt-12 pb-11">
            {
                images.map((image,index) => {
                    return (
                        <div key={index} className="
                        border-2 border-solid 
                        border-[rgba(249,249,249,0.1)] rounded-lg shadow-[0_26px_30px_-10px_rgba(0,0,0,0.69),0_16px_10px_-10px_rgba(0,0,0,0.73)] 
                        hover:scale-105
                        hover:border-[rgba(249,249,249,0.8)]
                        hover:shadow-[0_40px_58px_-16px_rgba(0,0,0,0.8),0_30px_22px_-10px_rgba(0,0,0,0.72)] 
                        transition-all duration-[250ms]

                        ">
                            <img src={image} className="object-cover"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Viewers;