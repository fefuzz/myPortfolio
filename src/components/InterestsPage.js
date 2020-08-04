import React from 'react'

import '../styles/interests.css'

import InterestsDiv from './subComponents/InterestsJs/Interests'
import NextPageBtn from './subComponents/NextPageBtn'
import PrevPageBtn from './subComponents/PrevPageBtn'
import LangBtn from './subComponents/langBtn'

import itaLang from '../i18n/ita.json'
import engLang from '../i18n/eng.json'

function InterestsPage(props) {

    let setLangIta = props.setLangIta;
    let setLangEng = props.setLangEng;

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    let currLang = props.currLang;

    let lang = (currLang === 'ENG') ? engLang : itaLang;


    return (
        <div className='InterestsPage'>
            <InterestsDiv lang ={lang}/>
            <NextPageBtn changePageAnimatedNext={changePageAnimatedNext} currDiv={'InterestsDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'InterestsDiv'} />
            <LangBtn setLangIta={setLangIta} setLangEng={setLangEng} />
        </div>
    )
}

export default InterestsPage
