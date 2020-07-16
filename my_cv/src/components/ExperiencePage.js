import React from 'react'

import '../styles/experience.css'

import ExperienceDiv from './subComponents/ExperienceJs/Experience';
import NextPage from './subComponents/NextPageBtn';
import PrevPageBtn from './subComponents/PrevPageBtn';

function ExperiencePage(props) {

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    return (
        <div className='ExperiencePage'>

            <ExperienceDiv />
            <NextPage changePageAnimatedNext={changePageAnimatedNext} currDiv={'ExperienceDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'ExperienceDiv'} />
            
        </div>
    )
}

export default ExperiencePage
