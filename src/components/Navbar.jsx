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
            {/* <input type="checkbox" class="navBar__checkbox" id="navi-toggle" />

            <label for="navi-toggle" class="navBar__button">
                <span class="navBar__icon">
                    &nbsp;
                </span>
            </label> */}
        </div>
    )
}

export default Navbar