import React from 'react';
import './Home.css';
import Books from '../Images/Books.JPG';
import {Link} from 'react-scroll'; 

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Welcome to</span>
                <span className="introText">
                    <span className="introName">Shelf Indulgence <br/></span>
                    Learning Center
                </span>
                <p className="introPara"><br/>Educating students in literature since 2020</p>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={1000}>
                    <button className="btn">
                        About Us
                    </button>
                </Link>
            </div>
            <img src={Books} alt="CAD" className="bg"/>
        </section>
    )
}

export default intro