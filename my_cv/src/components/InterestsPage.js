import React from 'react'

import '../styles/interests.css'

import InterestsDiv from './subComponents/InterestsJs/Interests'
import NextPage from './subComponents/NextPageBtn';
import PrevPageBtn from './subComponents/PrevPageBtn';

function InterestsPage(props) {

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;


    return (
        <div className='InterestsPage'>
            <InterestsDiv />
            <NextPage changePageAnimatedNext={changePageAnimatedNext} currDiv={'InterestsDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'InterestsDiv'} />
        </div>
    )
}

export default InterestsPage
