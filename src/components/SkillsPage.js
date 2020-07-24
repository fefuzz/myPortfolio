import React from 'react'

import '../styles/skills.css'

import SkillsDiv from './subComponents/SkillsJs/Skills'
import NextPage from './subComponents/NextPageBtn';
import PrevPageBtn from './subComponents/PrevPageBtn';

function SkillsPage(props) {

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;


    return (
        <div className='SkillsPage'>
            <SkillsDiv />
            <NextPage changePageAnimatedNext={changePageAnimatedNext} currDiv={'SkillsDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'SkillsDiv'} />
        </div>
    )
}

export default SkillsPage
