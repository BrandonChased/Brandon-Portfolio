import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p412z8u', 'template_ybbl7zm', form.current, 'UXcSoM8kMuBM6lZ-1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
    };

    return (
        <div className='container mb-5' id='contact-form'>
            <div className='card bg-primary'>
                <div className='card-body'>
                    <div className='card-title text-light contact-form__top' style={{ textAlign: "left", fontWeight: "bold" }}>
                        <span className='contact-form__header'>Write Me a Message 👇</span>
                        <span className='contact-form__recieved-message'>Message Sent</span>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group d-flex flex-column">
                            <label className='py-3 text-light contact-form__label' style={{ textAlign: "left" }} htmlFor="user_name">Name:</label>
                            <input type="text" className="form-control" name='user_name' id="name" placeholder="Enter your name.." />
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label className='py-3 text-light contact-form__label' style={{ textAlign: "left" }} htmlFor="user_email">Email:</label>
                            <input type='email' className="form-control" name='user_email' id="email" placeholder="Enter your email..." />
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label className='py-3 text-light contact-form__label' style={{ textAlign: "left" }} htmlFor="message">Message:</label>
                            <textarea type='text' className="form-control" name='message' id="message" placeholder="Enter a message..." />
                        </div>
                        <div className='text-left py-3'>
                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm