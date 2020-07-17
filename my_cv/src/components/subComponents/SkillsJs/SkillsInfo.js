import React from 'react'

import InfoSkills from '../InfoSkills'

function SkillsInfo() {

    let arraySkillsProgramming = ['Java','C','C++17', 'HTML5', 'CSS3', 'Javascript ES6', 'PHP', 'MySQL', 'Python']
    let arraySkillsOs = ['Linux', 'Windows']
    let arraySkillsFrameworks = ['Java Springboot', 'Java Hibernate', 'ReactJs', 'NodeJs']
    let arraySkillsOthers = ['GIT', 'Apache2', 'Tomcat', 'Office Suite', 'LaTeX', 'GiMP', ]

    return (
        <div className='SkillsInfo'>

            <h3> - Skills - </h3>

            <InfoSkills 
                programmingSkills={arraySkillsProgramming} 
                osSkills={arraySkillsOs}
                frameworksSkills={arraySkillsFrameworks}
                othersSkills={arraySkillsOthers}

            />


            <h3> - Languages - </h3>

            <div className='LanguagesDiv'>
                <p>✔ <b>Italiano</b> - Madrelingua</p>
                <p>✔ <b>Inglese</b> - Intermedio</p>
            </div>
            
        </div>
    )
}

export default SkillsInfo
