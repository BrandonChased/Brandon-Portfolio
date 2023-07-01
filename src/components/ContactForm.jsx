import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [isVisible, setIsVisible] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs
                .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
                .then((result) => {
                    console.log(result.text);
                    setIsVisible(true);
                    setTimeout(() => {
                        setIsVisible(false);
                    }, 5000);
                })
                .catch((error) => {
                    console.log(error.text);
                });

            e.target.reset();
        }
    };

    const validateForm = () => {
        const nameInput = form.current.elements.user_name;
        const emailInput = form.current.elements.user_email;
        const messageInput = form.current.elements.message;

        // Validate name field
        if (nameInput.value.trim() === '') {
            alert('Please enter your name');
            nameInput.focus();
            return false;
        }

        // Validate email field
        if (emailInput.value.trim() === '') {
            alert('Please enter your email');
            emailInput.focus();
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return false;
        }

        // Validate message field
        if (messageInput.value.trim() === '') {
            alert('Please enter your message');
            messageInput.focus();
            return false;
        }

        return true;
    };

    return (
        <div className='contact-form container mb-5' id='contact-form'>
            <div className='card bg-primary'>
                <div className='card-body'>
                    <div className='card-title text-light contact-form__top' style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span className='contact-form__header'>Write Me a Message 👇</span>
                        {isVisible && <span className='contact-form__received-message'>Message Sent</span>}
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='form-group d-flex flex-column'>
                            <label className='py-3 text-light contact-form__label' style={{ textAlign: 'left' }} htmlFor='user_name'>
                                Name:
                            </label>
                            <input type='text' className='form-control' name='user_name' id='name' placeholder='Enter your name..' required />
                        </div>
                        <div className='form-group d-flex flex-column'>
                            <label className='py-3 text-light contact-form__label' style={{ textAlign: 'left' }} htmlFor='user_email'>
                                Email:
                            </label>
                            <input type='email' className='form-control' name='user_email' id='email' placeholder='Enter your email...' required />
                        </div>
                        <div className='form-group d-flex flex-column'>
                            <label className='py-3 text-light contact-form__label' style={{ textAlign: 'left' }} htmlFor='message'>
                                Message:
                            </label>
                            <textarea
                                type='text'
                                className='form-control'
                                name='message'
                                id='message'
                                placeholder='Enter a message...' required></textarea>
                        </div>
                        <div className='text-left py-3'>
                            <button type='submit' className='btn btn-primary btn-lg'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;