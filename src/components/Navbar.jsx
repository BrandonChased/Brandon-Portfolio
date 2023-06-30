import React from 'react'

function Navbar() {
    return (
        <div className='navBar'>
            <span href='#' className='text-dark font-weight-bold'>Brandon DeBenedictis</span>
            <div className='navBar__items'>
                {/* <a href='#'  className='text-secondary'>Intro</a> */}
                <a href='#'>Intro</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#education'>Education</a>
                <a href='#contact-form'>Contact</a>
            </div>
            {/* <input type="checkbox" className="navBar__checkbox" id="navi-toggle" />

            <label for="navi-toggle" className="navBar__button">
                <span className="navBar__icon">
                    &nbsp;
                </span>
            </label> */}
        </div>
    )
}

export default Navbar