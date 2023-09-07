import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoutingAdmin = () => {
  
    const authGaurd = window.sessionStorage.getItem("adminId");
    console.log("admin token authentication :", authGaurd);

    return(
        authGaurd ? <Outlet/> : <Navigate to={`/error2`}/>
  )
}

export default ProtectRoutingAdmin