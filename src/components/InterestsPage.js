import React from 'react'

import '../styles/interests.css'

import InterestsDiv from './subComponents/InterestsJs/Interests'
import NextPageBtn from './subComponents/NextPageBtn';
import PrevPageBtn from './subComponents/PrevPageBtn';

import itaLang from '../i18n/ita.json'
import engLang from '../i18n/eng.json'

function InterestsPage(props) {

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    let currLang = props.currLang;
    let setLang = props.setLang;

    let lang = (currLang === 'ENG') ? engLang : itaLang;


    return (
        <div className='InterestsPage'>
            <InterestsDiv lang ={lang}/>
            <NextPageBtn changePageAnimatedNext={changePageAnimatedNext} currDiv={'InterestsDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'InterestsDiv'} />
        </div>
    )
}

export default InterestsPage
