import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin} from '../features/user/userSlice';
import {auth,GoogleAuthProvider} from '../firebase'
import {onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Header() {
    const links=['home','search','watchlist','original','movie','series'];
    const history =useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    const dispatch=useDispatch();
    
    useEffect(() => {
        onAuthStateChanged(auth,async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL,
                }));
            }
            history('/');
        })
    },[])

    const SignIn=()=>{
        var provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then ((result) => {
            const user=result.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            }));
            history('/');
        })
    }

    const SignOut=()=>{
        signOut(auth).then(()=>{
            dispatch(setSignOut());
            history('login');
        })
    }
    
    return (
       <div className="h-24 flex items-center px-14 text-white overflow-x-hidden bg-[#040714]">
            <img src="./images/logo.svg" alt="" className="w-32"/>
            {
                !userName?<div onClick={SignIn} className="ml-auto text-2xl px-4 py-2 border-2 rounded-lg uppercase hover:bg-white hover:text-slate-800 hover:border-transparent transition-all duration-500">Login</div>:
                <>
                <div className="flex-1 items-center ml-10 hidden lg:flex">
                {
                    links.map((link,index)=>{
                        return (
                            <a href={`${link}`} className="flex items-center mx-5 cursor-pointer uppercase" key={index}>
                            <img src={`./images/${link}-icon.svg`}alt=""  className="h-8"/>
                            <span className="text-xl tracking-[1.42px] relative 
                            after:content-[''] after:h-1 
                            after:bg-white 
                            after:absolute 
                            after:left-0 
                            after:right-0 
                            after:bottom-[-6px]
                            after:opacity-0 
                            after:scale-0 
                            after:hover:opacity-100 after:hover:scale-100 after:transition-all after:transition-300">{`${link}`}</span>
                            </a>
                        )
                })}
            </div >
            <img src={userPhoto} alt="" className="w-16 rounded-full ml-auto" onClick={SignOut}/>
            </>}
       </div>
    )
}

export default Header;