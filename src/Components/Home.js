import React from 'react';
import './Home.css';
import Bot from '../Images/bot.png';
import {Link} from 'react-scroll'; 

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Welcome to</span>
                <span className="introText">
                    <span className="introName">'SC ARC <br/></span>
                    the Advanced Robotic Combat Design Team of USC
                </span>
                <p className="introPara"><br/>Educating students in various fields of engineering and business through combat robotics.</p>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={1000}>
                    <button className="btn">
                        About Us
                    </button>
                </Link>
            </div>
            <img src={Bot} alt="CAD" className="bg"/>
        </section>
    )
}

export default intro