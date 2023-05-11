import React from 'react'

function Navbar() {
    return (
        <div style={{position: "sticky", top: 0, zIndex: "5"}} className='bg-light py-3 d-flex justify-content-around align-items-end'>
            <span style={{fontSize: "1.4rem"}} href='#' className='w-50 pl-5 text-dark font-weight-bold'>Brandon DeBenedictis</span>
            <div className='d-flex justify-content-around w-50'>
                {/* <a href='#'  className='text-secondary'>Intro</a> */}
                <a href='#' className='text-secondary'>Projects</a>
                <a href='#' className='text-secondary'>Education</a>
                <a href='#' className='text-secondary'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar