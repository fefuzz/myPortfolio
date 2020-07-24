import React from 'react'

import InfoSkills from '../InfoSkills'

function SkillsInfo(props) {

    let lang = props.lang;

    console.log(lang.pages.skills);

    return (
        <div className='SkillsInfo'>

            <h3> - {lang.pages.skills.main_title_skills} - </h3>

            <InfoSkills 
                programmingSkills={lang.pages.skills.infos_skills.programming} 
                osSkills={lang.pages.skills.infos_skills.os}
                frameworksSkills={lang.pages.skills.infos_skills.frameworks}
                othersSkills={lang.pages.skills.infos_skills.others}
            />


            <h3> - {lang.pages.skills.main_title_languages} - </h3>

            <div className='LanguagesDiv'>
                <p>✔ <b>Italiano</b> - {lang.pages.skills.infos_language.ita_lang_info}</p>
                <p>✔ <b>Inglese</b> - {lang.pages.skills.infos_language.eng_lang_info}</p>
            </div>
            
        </div>
    )
}

export default SkillsInfo
