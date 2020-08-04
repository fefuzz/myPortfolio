import React from 'react'

import '../styles/experience.css'

import ExperienceDiv from './subComponents/ExperienceJs/Experience'
import NextPage from './subComponents/NextPageBtn'
import PrevPageBtn from './subComponents/PrevPageBtn'
import LangBtn from './subComponents/langBtn'


import itaLang from '../i18n/ita.json'
import engLang from '../i18n/eng.json'

function ExperiencePage(props) {

    let setLangIta = props.setLangIta;
    let setLangEng = props.setLangEng;

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    let currLang = props.currLang;

    let lang = (currLang === 'ENG') ? engLang : itaLang;
    
    return (
        <div className='ExperiencePage'>

            <ExperienceDiv lang ={lang}/>
            <NextPage changePageAnimatedNext={changePageAnimatedNext} currDiv={'ExperienceDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'ExperienceDiv'} />
            <LangBtn setLangIta={setLangIta} setLangEng={setLangEng} />
        </div>
    )
}

export default ExperiencePage
