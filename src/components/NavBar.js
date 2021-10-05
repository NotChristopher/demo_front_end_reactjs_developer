import * as React from 'react';
import './Dashboard.css';
import Avatar from '@mui/material/Avatar';
import {Link } from "react-router-dom";





function Nav() {

    const logo = `https://www.dexterhut.com/img/dh_logo.png`
    
  return (
    <div className = "Nav">
         <img src = {logo} alt = "logo images" className="logo" />
    <div className = "Side-nav">
        <div className = "Nav-items">
          <div className ="Profile-container">
            <Link to = "Profile" style={{ textDecoration: 'none', color:"black"  }}>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className = "Avatar"/><h2 className = "Profile">Profile</h2>
            </Link>
            </div>
            
            <Link  to="/" style={{ textDecoration: 'none', color:"black" }}>
             <h2 className = "Home">Home</h2>
             
             
              </Link>
            <Link  to="Explore" style={{ textDecoration: 'none', color:"black" }}>
            <h2 className = "Explore">Explore</h2>
              </Link>
          
            <Link  to="Settings" style={{ textDecoration: 'none' , color:"black" }}>
            <h2 className = "Settings">Settings</h2>
              </Link>

        </div>


    </div>
</div>

    )};

    export default Nav;