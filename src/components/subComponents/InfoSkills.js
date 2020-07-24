import React from 'react'

import '../../styles/info_skills.css'

function InfoSkills(props) {

    let arraySkilsProgramming = props.programmingSkills;
    let arraySkillsOs = props.osSkills;
    let arraySkillsFrameworks = props.frameworksSkills;
    let arraySkillsOthers = props.othersSkills;

    
    return (
        <div className='InfoSkills'>
            <div className='SkillsCategory'>
                <h5>Programming:</h5>
                {arraySkilsProgramming.map((el) => {return (<p>{el}</p>)})}
            </div>
            <div className='SkillsCategory'>
                <h5>OS:</h5>
                {arraySkillsOs.map((el) => {return (<p>{el}</p>)})}
            </div>
            <div className='SkillsCategory'>
                <h5>Frameworks:</h5>
                {arraySkillsFrameworks.map((el) => {return (<p>{el}</p>)})}
            </div>
            <div className='SkillsCategory'>
                <h5>Tools - Others:</h5>
                {arraySkillsOthers.map((el) => {return (<p>{el}</p>)})}
            </div>
        
        </div>
    )
}

export default InfoSkills
