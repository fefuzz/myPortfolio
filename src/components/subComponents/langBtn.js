import React from 'react'

import '../../styles/nav_page_btn.css'

import flagIta from '../../images/ita_flag.png'
import flagEng from '../../images/eng_flag.png'

function langBtn(props) {
    return (
        <div className='Lang LangBtnTransition'>
            <img src={flagIta} alt="ita" />
            <img src={flagEng} alt="eng" />
        </div>
    )
}

export default langBtn
