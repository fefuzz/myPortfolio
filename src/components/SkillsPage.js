import React from 'react'

import '../styles/skills.css'

import SkillsDiv from './subComponents/SkillsJs/Skills'
import NextPage from './subComponents/NextPageBtn'
import PrevPageBtn from './subComponents/PrevPageBtn'
import LangBtn from './subComponents/langBtn'

import itaLang from '../i18n/ita.json'
import engLang from '../i18n/eng.json'

function SkillsPage(props) {

    let setLangIta = props.setLangIta;
    let setLangEng = props.setLangEng;

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    let currLang = props.currLang;

    let lang = (currLang === 'ENG') ? engLang : itaLang;

    return (
        <div className='SkillsPage'>
            <SkillsDiv lang ={lang}/>
            <NextPage changePageAnimatedNext={changePageAnimatedNext} currDiv={'SkillsDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'SkillsDiv'} />
            <LangBtn setLangIta={setLangIta} setLangEng={setLangEng} />
        </div>
    )
}

export default SkillsPage
