import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout({isLoggedIn, setIsLoggedIn}) {
    
    return(
        <>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <Outlet/>
        </>
    )
}

export default Layout;