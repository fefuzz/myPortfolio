import React, { useState } from 'react'

import WelcomeStart from './subComponent/WelcomeStart'
import WelcomeForm from './subComponent/WelcomeForm'

import '../styles/Welcome.css'

function Welcome(props) {

    const [sub_challenge, setChallenge] = useState('sub_0')

    var challenge_one = () => setChallenge('sub_1')

    var Render = () => {
        var result = []
        if(sub_challenge === 'sub_0'){
            result.push(<WelcomeStart key={'welcome_Start'} challenge={challenge_one}/>)
        }
        else if(sub_challenge === 'sub_1'){
            result.push(<WelcomeStart key={'welcome_Start'} challenge={challenge_one}/>)
            result.push(<WelcomeForm key={'welcome_Form'} challenge={props.setNext}/>)
        }

        return result
    }

    return ( <div className='Welcome'> {Render()} </div>)
}

export default Welcome
