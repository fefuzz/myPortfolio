import React from 'react'

import iconMail from '../../../images/icon_mail.png'
import iconPhone from '../../../images/icon_phone.png'
import iconPosition from '../../../images/icon_position.png'
import iconLinkedin from '../../../images/icon_linkedin.png'
import iconGithub from '../../../images/icon_github.png'

function Presentations() {
    return (
        <div className='Presentations'>
            <h3>Pierpaolo Vanni</h3>
            <div className="ContactDiv">
                <img src={iconPosition} alt="Position: " /><p>Pisa (PI)</p>
            </div>
            <div className="ContactDiv">
                <img src={iconPhone} alt="Phone: " /><p>(+39) 3207024676</p>
            </div>
            <div className="ContactDiv">
                <img src={iconMail} alt="Mail: " /><p>pierpaolovanni@pec.it</p>
                </div>
            <div className="ContactDiv">
                <img src={iconLinkedin} alt="Linkedin: "/><a href="https://linkedin.com/in/pierpaolo-vanni/" target="_blank" rel="noopener noreferrer"><p>My Linkedin Profile</p></a>
            </div>
            <div className="ContactDiv">
                <img src={iconGithub} alt="GitHub: " /><a href="https://github.com/fefuzz" target="_blank" rel="noopener noreferrer"><p>My GitHub Profile</p></a>
            </div>
        </div>
    )
}

export default Presentations
