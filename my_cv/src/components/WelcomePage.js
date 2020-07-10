import React, { useState } from 'react'

import WelcomeDiv from './subComponents/WelcomeJs/WelcomeDiv'
import NextPage from './subComponents/WelcomeJs/NextPage'

import '../styles/welcome.css'

function WelcomePage() {

    return ( <div className='WelcomePage'> <WelcomeDiv /> <NextPage /> </div>)
}

export default WelcomePage
