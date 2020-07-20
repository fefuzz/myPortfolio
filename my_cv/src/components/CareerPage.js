import React from 'react';

import '../styles/career.css'
import itaLang from '../i18n/ita.json'
import engLang from '../i18n/eng.json'
import NextPage from './subComponents/NextPageBtn';
import PrevPageBtn from './subComponents/PrevPageBtn';

import CareerDiv from './subComponents/CareerJs/Career';

function CareerPage(props) {

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    let currLang = props.currLang;
    let setLang = props.setLang;

    let lang = (currLang === 'ENG') ? engLang : itaLang;

    return (
        <div className='CareerPage'>
            <CareerDiv lang ={lang}/>
            <NextPage changePageAnimatedNext={changePageAnimatedNext} currDiv={'CareerDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'CareerDiv'} />
        </div>
    )
}

export default CareerPage
