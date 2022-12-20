import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import db from '../firebase';

function Details() {
    const Id=useParams('id');
    let {id}=Id;
    id=id.slice(1);
    const [Detail,setDetail]=useState({});
    useEffect(() =>{
        const docRef=doc(db,'Movies',id);
        const unsubdoc=onSnapshot(docRef,(doc)=>{
            setDetail(doc.data());
    })},[id]);
    console.log(Detail);

    return(
        <div className={`h-[calc(100vh-70px)] px-[calc(3.5vw-5px)] relative`}> 
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
            <img src={Detail.BackgroundImg} alt="" className="object-cover h-full w-full object-right"/>
            </div>
            <div className='h-[30vh] w-[35vw] min-h-[170px] min-w-[200px]'>
                <img src={Detail.TitleImg} alt="" className='w-full h-full object-contain mt-10'/>
            </div>
            <div className="flex items-center my-8">

                <button className="rounded-md text-2xl flex items-center h-[56px] bg-[rgb(249,249,249)] border-none px-10 mr-[25px] cursor-pointer hover:bg-[rgb(198,198,198)] uppercase">
                    <img src="/images/play-icon-black.png" alt=""/>
                    <span>Play</span>
                </button>

                <button className='rounded-md text-2xl flex items-center h-[56px] bg-[rgba(0,0,0,0.3)] border-none px-10 mr-[25px] cursor-pointer hover:bg-[rgb(198,198,198)] border-2 border-[rgb(249,249,249)] text-[rgb(249,249,249)] uppercase'>
                <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </button>

                <button className='w-16 h-16 flex justify-center items-center rounded-full bg-[rgba(0,0,0,0.5)] border-2 border-white cursor-pointer mr-4'>
                    <span className="text-5xl mt-[-6px] text-white">+</span>
                </button>
                <button className='w-16 h-16 flex justify-center items-center rounded-full bg-[rgb(0,0,0)] border-2 border-white cursor-pointer mr-4'>
                    <img src="/images/group-icon.png" alt=""  className="text-5xl />"/>
                </button>
            </div>
            <div className="text-slate-50 text-4xl min-h-[20px] mt-10 font-extrabold">
                {`${Detail.Genres}`}
            </div>
            <div className="text-slate-50 text-[15px] mt-4 max-w-[500px]">
                {Detail.Description}
            </div>
        </div>
    )
}

export default Details;