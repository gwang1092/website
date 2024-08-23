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
            <img src={hlogo} alt = "logo" className='logo'></img>
            <div className="desktopMenu">
                {/*<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={1000} className="desktopMenuItem">Home</Link>*/}
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='people' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">People</Link>
                <Link activeClass='active' to='galleryComp' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Gallery</Link>
                <Link activeClass='active' to='sponsors' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Sponsors</Link>
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