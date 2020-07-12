import React from 'react'

import WelcomeDiv from './subComponents/WelcomeJs/WelcomeDiv'
import NextPageBtn from './subComponents/NextPageBtn'

import '../styles/welcome.css'

function WelcomePage(props) {

    let changePageAnimated = props.changePageAnimated;

    return ( 
        <div className='WelcomePage'> 
            <WelcomeDiv /> 
            <NextPageBtn changePageAnimated={changePageAnimated} currDiv={'WelcomeDiv'}/> 
        </div>
    )
}

export default WelcomePage
