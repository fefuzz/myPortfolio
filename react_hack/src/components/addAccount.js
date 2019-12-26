import React, { useState } from 'react'
import '../styles/AddAccount.css'
import axios from 'axios'

function AddAccount(props) {

    const [state, setState] = useState('PASS_OK')
    var nextChallenge = props.setNext


    var register = () => {
        let username = document.getElementById('usr_val').value
        let password = document.getElementById('psw_val').value
        let rep_password = document.getElementById('rep_psw_val').value

        if(rep_password === '' || password === '' || username === ''){
            setState('FORM_UNCOMPLETE')
        }
        else if(rep_password === password) {
            axios.post('http://localhost:9000/register', {
                reg_usr: username,
                reg_psw: password
            })
            .then(res => {
                //TODO CHECK IF REGISTER IS OK
                nextChallenge('exist_user')
            })
            .catch(rej => { console.log(rej) })
        }
        else {
            setState('REP_WRONG')
        }

    }

    var repOk_render = () => {
        var result = []

        if(state === 'REP_WRONG'){
            result.push(<p key={'rep_not_ok_parag'}>Password non corrisponde con ripetizione</p>)
        }
        if(state === 'FORM_UNCOMPLETE'){
            result.push(<p key={'form_uncomplete_parag'}>Form non Completo, per favore completalo</p>)
        }

        return result
    }

    return (
        <div className='AddAccount'>
            <p>Complimenti! Sei entrato. Da qui puoi inserire un nuovo account</p>
            <p>Metti alla prova le tue conoscente di sicurezza informatica con</p>
            <h2>Hackker</h2>

            <form>
                <p>Inserisci Username</p> <input type='text' id='usr_val' placeholder='username'/>
                <p>Inserisci Password</p> <input type='password' id='psw_val' placeholder='password' />
                <p>Ripeti Password</p> <input type='password' id='rep_psw_val' placeholder='ripeti' />
                <br /> <br />
                <input type='button' value='Inserisci' onClick={register}/>
            </form>

            {repOk_render()}
        </div>
    )
}

export default AddAccount
