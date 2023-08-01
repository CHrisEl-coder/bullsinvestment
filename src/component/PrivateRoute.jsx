import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import {useAuthStatus} from '../hooks/useAuthStatus';
import Loader from '../component/loader'


export default function PrivateRoute() {
    const {loggedIn, checkStatus} = useAuthStatus()
    if(checkStatus) {
      return <Loader />
    }
  return loggedIn ? <Outlet/> : <Navigate to='/sign-up'/>;
}
