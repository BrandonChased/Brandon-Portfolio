import React from 'react'
import linkedin from "../images/socials/linkedin.png";
import github from "../images/socials/github.png";
import mail from "../images/socials/mail.png";

import resume from "../images/socials/resume.png";

function Socials() {
    return (
        <div className='socials'>
            <a href='https://www.linkedin.com/in/brandon-debenedictis/'>
                <img className='socials__icon' src={linkedin} alt="linked in" />
            </a>
            <a href='https://github.com/BrandonChased'>
                <img className='socials__icon' src={github} alt="github" />
            </a>
            <a href='mailto:brandonchasedebenedictis@gmail.com'>
                <img className='socials__icon' src={mail} alt="mail" />
            </a>
            <div>
                <img className='socials__icon' src={resume} alt="linked in" />
            </div>
        </div>
    )
}

export default Socials