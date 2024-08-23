import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import b4la from '../Images/B4LA.mp4'; 
import group from '../Images/group2.png';
import baum from '../Images/baum.png';
import wires from '../Images/wires.png';
import fight from '../Images/fight.png';
import repair from '../Images/repair.png'; 
import './Gallery.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider'; 

function VideoContainer({ isActive, src, type }) {
    const { useState, useRef, useEffect } = React; 
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;
        if (!isActive) {
        ref.current.pause();
        }
    }, [isActive]);

    return (
        <video controls ref={ref}>
        <source src={src} type={type} />
        </video>
    );
}

const Gallery = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex != dataSlider.length) {
            setSlideIndex(slideIndex+1); 
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1); 
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex-1);
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length); 
        }
    }
    const moveDot = index => {
        setSlideIndex(index); 
    }

    return (
        <section id="galleryComp">
            <div className="galleryTitle">Photo Gallery</div>

            <div className="gallery">
                <div className="container-slider">
                    {dataSlider.map((obj, index) => {
                        return (
                            <div key={obj.id} className={slideIndex === index + 1? "slide active-anim" : "nothing"}>
                                {obj.type ? 
                                    (<img src={obj.img}/> 
                                    ) : 
                                    (<VideoContainer src={obj.vid} type="video/mp4" isActive={slideIndex === index + 1} />
                                    )
                                }
                            </div>
                        )
                    })}
                    <BtnSlider moveSlide={nextSlide} direction={"next"}></BtnSlider>
                    <BtnSlider moveSlide={prevSlide} direction={"prev"}></BtnSlider>
                    <div className="container-dots">
                        {Array.from({length: dataSlider.length}).map((item, index) => 
                            (<div onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}>
                            </div>))}
                    </div>
                </div>  
                <div className="imageText">
                    {dataSlider.map((obj, index) => {
                        return (
                            <div key={obj.id} className={slideIndex === index + 1? "text" : "nothing"}>
                                <div key={obj.id} className="imgTitle">
                                    {obj.title} 
                                </div>
                                <div key={obj.id} className="imgText">
                                    {obj.text} 
                                </div>
                            </div>
                        ); 
                    })}
                </div>
            </div>  
        </section>
    ); 
}

export default Gallery; 