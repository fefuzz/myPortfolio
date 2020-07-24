import React from 'react'

import SkillsInfo from './SkillsInfo'

function Skills(props) {

    let lang = props.lang


    return (
        <div className='SkillsDiv'>
            <SkillsInfo lang={lang}/>
        </div>
    )
}

export default Skills
