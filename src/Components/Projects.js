import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import './Projects.css'; 
import Queen from '../Images/ArcQ.png'; 
import Robot from '../Images/CAD2.png'; 

const Works = () => {

    return (
        <section id='works'>
            <h2 className="worksTitle">Our Projects</h2>
            <span className="worksDesc">The team has been working on two robots. We've designed and built Queen of Hearts (left), competing with it at a recent tournament in SoCal. 
            We've also been working on our second robot and are awaiting further funding to complete it. See more on our Instagram! </span>
            
            <div className="worksImgs">
                <div className="project">
                    <img src={Queen} alt="p1" className="worksImg"/>
                    <div className="pText"> 
                        <div className='text'> Features include a vertical spinner and 3 configurations for different opponents. 
                        Recently, Queen of Hearts competed in the hobbyweight division of the Sacramento Bot Battles tournament. 
                        We had an amazing run, outcompeting teams from other universities including UC Berkeley, UC Merced, and more. 
                        The Queen of Hearts won the Most Destructive award, and finished 4th overall. 
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={Robot} alt="p2" className="worksImg"/>
                    <div className="pText">
                        <div className='text'> Our other robot features a horizontal spinner.
                        We have CADed our second robot and are currently awaiting funding to build it. </div>
                    </div>
                </div>
            </div>

            <a href="https://www.instagram.com/usc.arc/" target="_blank" rel="noreferrer">
                <button className ="workBtn">Instagram</button>
            </a>
        </section>
    );
}

export default Works; 