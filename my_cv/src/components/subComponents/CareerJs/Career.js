import React from 'react'
import CareerInfo from './CareerInfo'

function Career(props) {

    let lang = props.lang

    return (
        <div className='CareerDiv'>
            <CareerInfo lang={lang}/>
        </div>
    )
}

export default Career
