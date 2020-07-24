import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function Experience(props) {

    let lang = props.lang

    return (
        <div className='ExperienceDiv' >
            <ExperienceInfo lang={lang}/>
        </div>
    )
}

export default Experience
