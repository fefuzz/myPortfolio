import React from 'react'

import WelcomeDiv from './subComponents/WelcomeJs/WelcomeDiv'
import NextPageBtn from './subComponents/NextPageBtn'
import PrevPageBtn from './subComponents/PrevPageBtn';
import LangBtn from './subComponents/langBtn'

import '../styles/welcome.css'


function WelcomePage(props) {

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    return ( 
        <div className='WelcomePage'> 
            <WelcomeDiv /> 
            <NextPageBtn changePageAnimatedNext={changePageAnimatedNext} currDiv={'WelcomeDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'WelcomeDiv'} />
            <LangBtn />
        </div>
    )
}

export default WelcomePage
