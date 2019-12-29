import React from 'react'

import Welcome from './components/Welcome'
import AddAccount from './components/addAccount'
import Sidebar from './components/SideBarMenu'
import MainComp from './components/MainComponent'

import './styles/Profile.css';

function ProfileSection(props) {

    const currentChallenge = props.challenge
    var setChallenge = props.setChallenge

    if(currentChallenge === 'BEGIN'){
      setChallenge('CHALLENGE_1')
    }

    var setNextChallenge = (nextType) => {
      if(nextType === 'new_user'){ //new user is starting challenge, redirect on challenge_2
        setChallenge('CHALLENGE_2')
      }
      else if (nextType === 'exist_user'){ //existing user login or new user registered
        setChallenge('CHALLENGE_3')
      }
    }
  
    var render = () => {
      var result = []
      if(currentChallenge === 'CHALLENGE_1'){
        result.push(<Welcome key={'welcome_comp'} setNext={setNextChallenge}/>)
      }
      else if(currentChallenge === 'CHALLENGE_2'){
        result.push(<AddAccount key={'add_account_comp'} setNext={setNextChallenge}/>)
      }
      else{
        result.push(<Sidebar key={'sidebar_comp'}/>)
        if(currentChallenge === 'CHALLENGE_3') {
          result.push(<MainComp key={'main_comp'} currentChallenge={currentChallenge}/>)
        }
        // TODOS OTHER CHALLENGES
      }
      return result
    }
  
    return (
      <div className="ProfileSection">
        {render()}
      </div>
    );
}

export default ProfileSection
