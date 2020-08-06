import React from 'react'

import Presentations from './Presentations'

import '../../../styles/welcome.css'

function WelcomeDiv(props) {

    let isMobile = props.isMobile;

    return ( <div className='WelcomeDiv'> <Presentations isMobile={isMobile}/> </div>)
}

export default WelcomeDiv
