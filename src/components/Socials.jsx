import React from 'react'
import linkedin from "../images/socials/linkedin.png";
import github from "../images/socials/github.png";
import mail from "../images/socials/mail.png";

import resume from "../images/socials/resume.png";

function Socials() {
    return (
        <div className='socials'>
            <a className='socials__container' href='https://www.linkedin.com/in/brandon-debenedictis/'>
                <span className='socials__name'>LinkedIn</span>
                <img className='socials__icon' src={linkedin} alt="linked in" />
            </a>
            <a className='socials__container' href='https://github.com/BrandonChased'>
                <span className='socials__name'>GitHub</span>
                <img className='socials__icon' src={github} alt="github" />
            </a>
            <a className='socials__container' href='mailto:brandonchasedebenedictis@gmail.com'>
                <span className='socials__name'>Mail</span>
                <img className='socials__icon' src={mail} alt="mail" />
            </a>
            <a className='socials__container' href=''>
                <span className='socials__name'>Resume</span>
                <img className='socials__icon' src={resume} alt="linked in" />
            </a>
        </div>
    )
}

export default Socials