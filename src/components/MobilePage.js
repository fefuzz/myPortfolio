import React from 'react'

import WelcomeDiv from './subComponents/WelcomeJs/WelcomeDiv'
import CareerDiv from './subComponents/CareerJs/Career'
import ExperienceDiv from './subComponents/ExperienceJs/Experience'
import InterestsDiv from './subComponents/InterestsJs/Interests'
import SkillsDiv from './subComponents/SkillsJs/Skills'
import LangBtn from './subComponents/langBtn'

import itaLang from '../i18n/ita.json'
import engLang from '../i18n/eng.json'

function MobilePage(props) {

    let setLangIta = props.setLangIta;
    let setLangEng = props.setLangEng;

    let currLang = props.currLang;

    let lang = (currLang === 'ENG') ? engLang : itaLang;

    return (
        <div>
            <WelcomeDiv />
            <CareerDiv lang ={lang}/>
            <ExperienceDiv lang ={lang}/>
            <InterestsDiv lang ={lang}/>
            <SkillsDiv lang ={lang}/>
            <LangBtn setLangIta={setLangIta} setLangEng={setLangEng} />
            
        </div>
    )
}

export default MobilePage
