import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRouting = () => {
    const isAuthToken = window.sessionStorage.getItem("userid")
    console.log("value of the token :", isAuthToken);
  return (
    isAuthToken ? <Outlet/> : <Navigate to={`/error`} />
  )
}

export default ProtectRouting