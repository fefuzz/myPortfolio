import React from 'react';

import '../styles/career.css'

import NextPage from './subComponents/NextPageBtn'
import PrevPageBtn from './subComponents/PrevPageBtn'
import CareerDiv from './subComponents/CareerJs/Career'
import LangBtn from './subComponents/langBtn'

import itaLang from '../i18n/ita.json'
import engLang from '../i18n/eng.json'

function CareerPage(props) {

    let setLangIta = props.setLangIta;
    let setLangEng = props.setLangEng;

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    let currLang = props.currLang;

    let lang = (currLang === 'ENG') ? engLang : itaLang;

    return (
        <div className='CareerPage'>
            <CareerDiv lang ={lang}/>
            <NextPage changePageAnimatedNext={changePageAnimatedNext} currDiv={'CareerDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'CareerDiv'} />
            <LangBtn setLangIta={setLangIta} setLangEng={setLangEng} />
        </div>
    )
}

export default CareerPage
