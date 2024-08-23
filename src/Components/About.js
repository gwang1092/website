import React from 'react';
import './About.css'; 
import trojan from '../Images/trojans.png';
import gears from '../Images/gears.png'; 
import group from '../Images/group.png'; 

const About = () => {
    return (
        <section id='about'>
            <span className='title'>
                About Shelf Indulgence
            </span>
            <span className='description'> 
                 We are a group of teachers enthusiastic about children in the best way possible
            </span>
            <div className="bars">

                <div className="bar">
                    <img src={trojan} alt="trojan" className="barImage"></img>
                    <div className="barText">
                        <h2>Who we are</h2>
                        <p>We are the only education center that exists. </p>
                    </div>
                </div>
                <div className="bar">
                    <img src={gears} alt="gears" className="barImage"></img>
                    <div className="barText">
                        <h2>What we do</h2>
                        <p>Teach People</p>
                    </div>
                </div>
                <div className="bar">
                    <img src={group} alt="group" className="barImage"></img>
                    <div className="barText">
                        <h2>Join us</h2>
                        <p>We welcome members of any level of experience! 
                            However we will not tolerate playing agar.io in class.  
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default About; 