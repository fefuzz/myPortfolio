import React from 'react'

import InterestsInfo from './InterestsInfo'

function Interests(props) {

    let lang = props.lang

    return (
        <div className='InterestsDiv'>
            <InterestsInfo lang={lang}/>
        </div>
    )
}

export default Interests
