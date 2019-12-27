import React from 'react'
import '../styles/MainComponent.css'

function MainComponent( props ) {

    var currentChall = props.currentChallenge

    var render = () => {
        var result = []
        if(currentChall === 'CHALLENGE_3'){
            result.push(<h2>Congratulazioni</h2>)
            result.push(<p>Sei finalmente riuscito a completare le prime due sfide proposte</p>)
            result.push(<p>Ma questo era solo l'inizio, mettiti alla prova con challenge sempre più difficili!</p>)
            result.push(<h3>La tua prossima Sfida:</h3>)
            result.push(<p>Un hacker è entrato nei nostri sistemi e sta cambiando le password degli account di tutti i nostri utenti, compreso la tua!</p>)
            result.push(<p>Il nostro team di Ricercatori ha scoperto che si tratta di un bambino genio cinese di 8 anni, che si fa chiamare NedoHackerino</p>)
            result.push(<p>Il tuo obiettivo è riuscire ad isolare l'hacker e ripristinare la tua password con una più sicura! Sfortunatamente l'hackerino ha manomesso i nostri moduli di cambio password, quindi dovrai insegnarti per capire come cambiarla!</p>)
            result.push(<p>Risolvi l'enigma cercando di usare meno aiuti possibili per ottenere un punteggio maggiore nella sfida!</p>)
        }

        return result
    }

    return (
        <div className='MainComp'>
            {render()}
            <br></br>
            <input type='button' value='Start' />
        </div>
    )
}

export default MainComponent
