import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectUserName } from '../features/user/userSlice';
import Login from './Login';

const useAuth=()=>{
    const user=useSelector(selectUserName);
    return user;
}

function ProtectedRoutes() {
    const isAuth=useAuth();
  return isAuth?<Outlet/>:<Login/>;
}

export default ProtectedRoutes;
