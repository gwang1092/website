import React from 'react';
import './Navbar.css'; 
import logo from '../Images/logo.png'; 
import hlogo from '../Images/hLogo.png'; 
import contact from '../Images/contact.png'; 
import {Link} from 'react-scroll'; 

import {Link as LinkRedirect} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <LinkRedirect to="/">
                <img src={hlogo} alt = "logo" className='logo'></img>
            </LinkRedirect>
            <div className="desktopMenu">
                {/*<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={1000} className="desktopMenuItem">Home</Link>*/}
                <LinkRedirect to="/" className='desktopMenuListItem'>
                    Back to home
                </LinkRedirect>
            </div>
            <LinkRedirect to="/blog">
                <button className = "desktopMenuBtn">
                    <img src={contact} alt="Contact" className="desktopMenuImg"/>Our Blog
                </button>
            </LinkRedirect>
        </nav>
    )
}

export default Navbar