import React from 'react'

import {Link} from 'react-router-dom'

import '../styles/MainComponent.css'

function MainComponent( props ) {

    var currentChall = props.currentChallenge

    var render = () => {
        var result = []
        if(currentChall === 'CHALLENGE_3'){
            result.push(<h2 key={'h3_c3'}>Congratulazioni</h2>)
            result.push(<p key={'p1_c3'}>Sei finalmente riuscito a completare le prime due sfide proposte</p>)
            result.push(<p key={'p2_c3'}>Ma questo era solo l'inizio, mettiti alla prova con challenge sempre più difficili!</p>)
            result.push(<h3 key={'h3_2_c3'}>La tua prossima Sfida:</h3>)
            result.push(<p key={'p3_c3'}>Un hacker ha bucato i nostri inaccessibili sistemi informatici e si è divertito a cambiare le password dei nostri utenti, compreso la tua!</p>)
            result.push(<p key={'p4_c3'}>Il nostro team di infallibili ricercatori ha scoperto che si tratta di un bambino genio cinese di 8 anni, si fa chiamare NedoHackerino!</p>)
            result.push(<p key={'p5_c3'}>Il tuo obiettivo è cercare di ripristinare la tua password, risolvi l'enigma usando meno aiuti possibili per ottenere un punteggio maggiore nella sfida!</p>)
        }

        //TODO OTHER CHALLENGE

        return result
    }

    return (
        <div className='MainComp'>
            {render()}
            <br></br>
            <Link to="/challenge"><input type='button' value='Start' /></Link>
        </div>
    )
}

export default MainComponent
