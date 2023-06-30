import React from 'react'
import linkedin from "../images/socials/linkedin.png";

function Socials() {
    return (
        <div className='socials'>
            <img className='socials__icon' src={linkedin}alt="linked in" />
            <img className='socials__icon' src={linkedin}alt="linked in" />
            <img className='socials__icon' src={linkedin}alt="linked in" />
            <img className='socials__icon' src={linkedin}alt="linked in" />
        </div>
    )
}

export default Socials