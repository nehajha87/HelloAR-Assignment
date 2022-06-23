import React from 'react';
import logo from './img/logo.png';
import profile from './img/profilePic.jpg'


const Navbar = () => {
    return (
        <>
        <nav>
            <div id="photo" style={{textAlign: "center"}}>
                <img  src={logo} alt="logo" id='logo' />
                <span style={{verticalAlign:"middle"}} id="span1">MY APPLICATION</span>
            </div>
            <div className="username">
                <img src={profile} alt="Profile Pic" id='profile'/>
                <span style={{verticalAlign:"middle"}} id="span2">Username</span>
            </div>
        </nav>
    </>
    )
}

export default Navbar