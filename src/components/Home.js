import React,{useEffect} from 'react';
import ImageSlider from './ImageSlider'
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { doc, onSnapshot, collection, query, where} from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

function Home() {

  const dispatchMovies=useDispatch();

  useEffect(() => {
    const q = query(collection(db, "Movies"))
    const unsub = onSnapshot(q, (snapshot) => {
      let tempMovies=snapshot.docs.map((doc)=>{
        return {id:doc.id,...doc.data()};
      })
      dispatchMovies(setMovies(tempMovies));
    });
  }, []);

  return( 
    <div className="min-h-[calc(100vh-70px)] px-[calc(3.5vw+5px)] bg-[url('C:\Users\mayan\Downloads\ReactSuperNoob\disneyplus\public\images\home-background.png')] 
    bg-cover
    bg-no-repeat
    bg-center
    bg-fixed
    overflow-x-hidden text-gray-300
    ">   
      <ImageSlider/> 
      <Viewers/>   
      <Movies/>
    </div>
)
}

export default Home;
