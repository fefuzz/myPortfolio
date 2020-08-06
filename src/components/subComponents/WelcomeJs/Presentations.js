import React from 'react'

import iconMail from '../../../images/icon_mail.png'
import iconPhone from '../../../images/icon_phone.png'
import iconPosition from '../../../images/icon_position.png'
import iconLinkedin from '../../../images/icon_linkedin.png'
import iconGithub from '../../../images/icon_github.png'
import iconPositionMobile from '../../../images/icon_position_mobile.png'
import iconPhoneMobile from '../../../images/icon_phone_mobile.png'
import iconMailMobile from '../../../images/icon_mail_mobile.png'
import iconLinkedinMobile from '../../../images/icon_linkedin_mobile.png'
import iconGithubMobile from '../../../images/icon_github_mobile.png'

function Presentations(props) {

    let isMobile = props.isMobile;

    return (
        <div className='Presentations'>
            <h3>Pierpaolo Vanni</h3>
            
            <div className="ContactsCentering">
                <div className="ContactDiv">
                    <img src={isMobile? iconPositionMobile : iconPosition} alt="Position: " /><p>Pisa (PI)</p>
                </div>
                <div className="ContactDiv">
                    <img src={isMobile? iconPhoneMobile : iconPhone} alt="Phone: " /><p>(+39) 3207024676</p>
                </div>
                <div className="ContactDiv">
                    <img src={isMobile? iconMailMobile : iconMail} alt="Mail: " /><p>pierpaolovanni@pec.it</p>
                    </div>
                <div className="ContactDiv">
                    <img src={isMobile? iconLinkedinMobile : iconLinkedin} alt="Linkedin: "/><a href="https://linkedin.com/in/pierpaolo-vanni/" target="_blank" rel="noopener noreferrer"><p>My Linkedin Profile</p></a>
                </div>
                <div className="ContactDiv">
                    <img src={isMobile? iconGithubMobile : iconGithub} alt="GitHub: " /><a href="https://github.com/fefuzz" target="_blank" rel="noopener noreferrer"><p>My GitHub Profile</p></a>
                </div>
            </div>
        </div>
    )
}

export default Presentations
