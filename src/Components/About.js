import React from 'react';
import './About.css'; 
import trojan from '../Images/trojans.png';
import gears from '../Images/gears.png'; 
import group from '../Images/group.png'; 

const About = () => {
    return (
        <section id='about'>
            <span className='title'>
                About ARC
            </span>
            <span className='description'> 
                We are a group of enthusiastic undergraduate engineering students that creates and destroys robots!
                Our goal is to gain hands-on experience in engineering through designing, building, competing, and fixing combat robots.
                Working together, the team build a remote-controlled robot to compete in an arena styled tournament against other bots. 
            </span>
            <div className="bars">

                <div className="bar">
                    <img src={trojan} alt="trojan" className="barImage"></img>
                    <div className="barText">
                        <h2>Who we are</h2>
                        <p>We are the only combat robotics team at USC. Our team includes 
                            a variety of majors including ME, CECS, and business.</p>
                    </div>
                </div>
                <div className="bar">
                    <img src={gears} alt="gears" className="barImage"></img>
                    <div className="barText">
                        <h2>What we do</h2>
                        <p>Members will learn about machine elements, hardware/software of the robot, 
                            and mechanical physics of how robots interact with others. At the end of each semester, the team aims to compete at the National Havoc Robot League in an arena styled tournament.</p>
                    </div>
                </div>
                <div className="bar">
                    <img src={group} alt="group" className="barImage"></img>
                    <div className="barText">
                        <h2>Join us</h2>
                        <p>We welcome members of any level of experience! 
                            ARC is a great way to learn about CAD, prototyping, manufacturing, electronic systems, programming, teamwork, and more! 
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default About; 