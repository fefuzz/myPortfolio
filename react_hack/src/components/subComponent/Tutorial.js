import React from 'react'

function Tutorial(props) {
    return (
        <div className='Tutorial'>
            <h2>Benvenuto nel Tutorial</h2>
            <p>Questa è la prima volta che entri nella sezione Challenge, quindi ti spiegheremo il suo funzionamento</p>
            <p>[Inserisci descrizione]</p>
            <input type='button' value='Ho capito!' onClick={props.setShown}/>
        </div>
    )
}

export default Tutorial
