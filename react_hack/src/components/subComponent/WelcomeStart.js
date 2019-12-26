import React from 'react'

function WelcomeStart(props) {

    var challenge = props.challenge

    return (
        <div className='WelcomeStart'>
            <h3>Welcome in</h3>
                <h2 onClick={challenge}>Hackker</h2>
            <p>Prova ad Entrare!</p>
        </div>
    )
}

export default WelcomeStart
