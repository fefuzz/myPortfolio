import React, { useState } from 'react'
import Tutorial from './components/subComponent/Tutorial'
import LockSection from './components/subComponent/LockSection'

import './styles/ChallengeSection.css'

function ChallengeSection(props) {

    const currentChallenge = props.challenge

    //function to unlock section only if user have completed first 3 challenge
    function isSectionUnlocked(){
        if(currentChallenge === 'BEGIN' 
            || currentChallenge === 'CHALLENGE_1' 
            || currentChallenge === 'CHALLENGE_2'){
            return false
        }
        return true
    }

    const [tutorialView, setView] = useState(currentChallenge === 'CHALLENGE_3' ? 'YES' : 'NO')

    var setNoView = () =>{
        setView('NO')
    }

    var render = () => {
        var result = []
        if(!isSectionUnlocked()){
            result.push(<LockSection key={'lock_section'} />)
            return result
        }

        else if(tutorialView === 'YES'){
            result.push(<Tutorial key={'tutorial_show'} setShown={setNoView}/>)
        }

        return result
    }

    return (
        <div className='ChallengeSection'>
            {render()}
        </div>
    )
}

export default ChallengeSection
