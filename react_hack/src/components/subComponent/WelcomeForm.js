import React from 'react'
import axios from 'axios'

function WelcomeForm(props) {

    var setChallenge = props.challenge

    var tryLogin = () => {
        let username_val = document.getElementById('username').value
        let password_val = document.getElementById('password').value
        axios.post('http://localhost:9000/users', {
            username: username_val,
            password: password_val
        })
        .then(res => {
                if(res.data.user === 'USER_EXIST'){
                    setChallenge('exist_user')
                }
                else if(res.data.user === 'ADMIN_EXIST'){   
                    setChallenge('new_user')
                }
        })
        .catch(rej => console.log(rej))
    }

    return (
        <div className='WelcomeForm'>
            <form>
                <p>Username</p>
                <input type='text' id='username' placeholder='username'/>
                <p>Password</p>
                <input type='password' id='password' placeholder='password'/>
                <br /><br />
                <input type='button' onClick={tryLogin} value='Submit' />
            </form>
        </div>
    )
}

export default WelcomeForm
