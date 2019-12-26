import React, { useState } from 'react';

import Welcome from './components/Welcome'
import AddAccount from './components/addAccount'

import './styles/App.css';

function App() {

  const [currentChallenge, setChallenge] = useState('CHALLENGE_1')

  var setNextChallenge = (nextType) => {
    if(nextType === 'new_user'){ //new user is starting challenge, redirect on challenge_2
      setChallenge('CHALLENGE_2')
    }
    else if (nextType === 'exist_user'){
      setChallenge('CHALLENGE_3')
    }
  }

  var render = () => {
    var result = []
    if(currentChallenge === 'CHALLENGE_1'){
      result.push(<Welcome key={'welcome_comp'} setNext={setNextChallenge}/>)
    }
    if(currentChallenge === 'CHALLENGE_2'){
      result.push(<AddAccount key={'add_account_comp'} setNext={setNextChallenge}/>)
    }
    else{
      //TODO APPEND USER BAR
      if(currentChallenge === 'CHALLENGE_3') {
        //TODO NEW COMPONENT
      }
      // TODOS OTHER CHALLENGES
    }
    return result
  }

  return (
    <div className="App">
      {render()}
    </div>
  );
}

export default App;
