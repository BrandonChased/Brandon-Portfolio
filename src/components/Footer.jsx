import React from 'react'
import mail from "../images/socials/mail-black.png";
import linkedin from "../images/socials/linkedin-black.png";
import github from "../images/socials/github-black.png";


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <span href='#' className='font-weight-bold'>Brandon DeBenedictis</span>
                <div className='footer__socials'>
                    <a href="https://www.linkedin.com/in/brandon-debenedictis/"><img className='socials__icon' src={linkedin} /></a>
                    <a href="mailto:brandonchasedebenedictis@gmail.com"><img className='socials__icon' src={mail} /></a>
                    <a href="https://github.com/BrandonChased"><img className='socials__icon' src={github} /></a>
                </div>
            </div>
            <div className='footer__copyright'><i>© Copyright 2023. Made by Brandon DeBenedictis</i></div>
        </footer>
    )
}

export default Footer