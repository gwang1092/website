import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import "./Footer.css";
import youtube from "../Images/youtube.png"
import insta from "../Images/instagram.png";
import github from "../Images/github2.png"; 

const Footer = () => {
    return (
        <footer className="footer">
            <span className="contactEmail">Email: dqle@usc.edu </span>
            <div className='images'>
                <a href="https://www.instagram.com/usc.arc/" target='_blank' rel='noreferrer'>
                    <img src={insta} alt = "instagram" className='socials'></img>
                </a>
                <a href="https://github.com/orgs/AdvancedRoboticCombat/repositories" target='_blank' rel='noreferrer'>
                    <img src={github} alt = "github" className='socials'></img>
                </a>
                {/*<a href="" target='_blank' rel='noreferrer'>
                    <img src={youtube} alt = "instagram" className='socials'></img>
                </a>*/}
            </div>
        </footer>
    ); 
}

export default Footer; 