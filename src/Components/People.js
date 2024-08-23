import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import './People.css';
import people from '../Images/people.png'; 

const People = () => {
    return (
        <section id="people">

            <div className='peopleBody'>
                <h2 className="peopleTitle">Our Team</h2>
                <span className="peopleDesc">We have a current roster of 13 members, with 5 leadership members. 
                Most members are ME, CECS, or CS majors. Many have had some FRC/FTC robotics experience, 
                although we welcome new members of all experience levels!   </span>
                <div className='peopleLists'>
                    <div className='list'>
                        <ul>
                            <ul className='bullet'>
                            <b>Faculty Advisor: </b>
                                <a href="https://viterbi.usc.edu/directory/faculty/Nguyen/Quan" target='_blank' rel='noreferrer' className='link'>
                                    Dr. Quan Nguyen 
                                </a> 
                            </ul>
                            <ul className='bullet'>
                                <b>President: </b>
                                <a href="https://www.linkedin.com/in/davidle23" target='_blank' rel='noreferrer' className='link'>
                                    David Le
                                </a>
                            </ul>
                            <ul className='bullet'>
                                <b>Vice Pres: </b>
                                Evan Beller
                            </ul>
                        </ul>
                    </div>
                    <div className='list'>
                        <ul>
                            <ul className='bullet'>
                                <b>Treasurer: </b>
                                <a href="https://www.linkedin.com/in/usc-peter-wang/" target='_blank' rel='noreferrer' className='link'>
                                    Peter Wang
                                </a>
                            </ul>
                            <ul className='bullet'>
                                <b>Technical Director: </b>
                                Aaron Yang
                            </ul>
                            <ul className='bullet'>
                                <b>Social Chair: </b>
                                Grace Thomas
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>

            <img src={people} alt="members" className='peopleImg'></img>
        </section>
    ); 
}

export default People; 