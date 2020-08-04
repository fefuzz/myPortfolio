import React from 'react'

import '../../styles/nav_page_btn.css'

import flagIta from '../../images/ita_flag_icon.png'
import flagEng from '../../images/eng_flag_icon.png'



function langBtn(props) {

    let setLangIta = props.setLangIta;
    let setLangEng = props.setLangEng;

    return (
        <div className='Lang LangBtnTransition'>
            <div className='LangDiv'>
                <img src={flagIta} alt="ita" onClick={setLangIta}/>
                <img src={flagEng} alt="eng" onClick={setLangEng}/>
            </div>  
        </div>
    )
}

export default langBtn
