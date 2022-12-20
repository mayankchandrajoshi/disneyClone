import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMovies } from '../features/movie/movieSlice';
import MoviesSlider from './MoviesSlider';

function Movies() {
  const text=['Recommended for You','Latest Release','Action Movies','Best of all Times']
    let selectMovie=[];
    selectMovie=useSelector(selectMovies);
    return (
      <>
        {
          text.map((movie,key)=>{
            return(
              <div className="mb-4" key={key}>
                <h4 className="text-3xl font-bold mb-6">{movie}</h4>
                { 
                  !selectMovie.length==0?<MoviesSlider selectMovie={selectMovie}/>:<div className="text-3xl">Loading....</div>
                }
              </div>
              )})
        }
      </>
    )
}

export default Movies;
