import React, {useRef} from 'react';
import './Contact.css'; 

import emailjs from '@emailjs/browser'; 


const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        {/* Set up sendForm here: https://www.emailjs.com */}
        emailjs.sendForm('service_q484yf7', 'template_a7qrcdl', form.current, 'R8Suz9o57NTK5a2s9')
        .then((result) => {
            console.log(result.text);
            e.target.reset(); 
            alert('Email Sent!'); 
        }, (error) => {
            console.log(error.text);
            alert('Error - email me directly instead'); 
        });
    };

    return (
        <section id="contactPage">

            {/* Contact form to send me email */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Us</h1>
                <span className="contactDesc">Please fill out the form if you any inquiries!</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name'></input>
                    <input type="email" className="email" placeholder='Your Email' name='from_email'></input>
                    <textarea className='msg' rows="8" placeholder='Your Message' name='message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                </form>
            </div>

        </section>
    ); 
}

export default Contact