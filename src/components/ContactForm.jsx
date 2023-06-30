import React from 'react'

function ContactForm() {
    return (
            <div className='container mb-5'>
                <div className='card bg-primary'>
                    <div className='card-body'>
                        <div className='card-title text-light h2' style={{ textAlign: "left", fontWeight: "bold" }}>
                            Send Me a Message !
                        </div>
                        <form>
                            <div className="form-group d-flex flex-column">
                                <label className='h4 py-3 text-light' style={{ textAlign: "left" }} for="name">Name:</label>
                                <input type="text" className="form-control" name='name' id="name" placeholder="Enter your name.." />
                            </div>
                            <div className="form-group d-flex flex-column">
                                <label className='h4 py-3 text-light' style={{ textAlign: "left" }} for="email">Email:</label>
                                <input type='email' className="form-control" name='email' id="email" placeholder="Enter your email..." />
                            </div>
                            <div className="form-group d-flex flex-column">
                                <label className='h4 py-3 text-light' style={{ textAlign: "left" }} for="message">Message:</label>
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