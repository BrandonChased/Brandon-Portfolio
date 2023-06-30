import React from 'react'

function Navbar() {
    return (
        <div className='navBar'>
            <span href='#' className='text-dark font-weight-bold'>Brandon DeBenedictis</span>
            <div className='navBar__items'>
                {/* <a href='#'  className='text-secondary'>Intro</a> */}
                <a href='#'>Projects</a>
                <a href='#'>Education</a>
                <a href='#'>Contact</a>
            </div>
            <input type="checkbox" class="navBar__checkbox" id="navi-toggle" />

            <label for="navi-toggle" class="navBar__button">
                <span class="navBar__icon">
                    &nbsp;
                </span>
            </label>
        </div>
    )
}

export default Navbar