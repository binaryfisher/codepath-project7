import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () =>{
    return(
       
            <div className="all-content">
                <div className="nav-bar">
                     <Link to="/">Home</Link>
                     <Link to="/create">Create</Link>
                     <Link to="/gallery">Gallery</Link>
                </div>
                <Outlet />
            </div>
        
    );

}


export default NavBar;