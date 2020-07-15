import React from 'react'

import '../styles/experience.css'
import NextPage from './subComponents/NextPageBtn';
import ExperienceDiv from './subComponents/ExperienceJs/Experience';

function ExperiencePage(props) {

    let changePageAnimated = props.changePageAnimated;

    return (
        <div className='ExperiencePage'>

            <ExperienceDiv />
            <NextPage changePageAnimated={changePageAnimated} currDiv={'ExperienceDiv'}/> 
            
        </div>
    )
}

export default ExperiencePage
