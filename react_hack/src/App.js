import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ProfileSection from './profileSection'
import ChallengeSection from './challengeSection'

function App() {
  
  const [currentChallenge, setChall] = useState('BEGIN')

  function Profile(){return <ProfileSection challenge={currentChallenge} setChallenge={setChall}/>}
  function Challenge() {return <ChallengeSection challenge={currentChallenge}/>}

  return(
    <div>
  <Router>
    <Switch>
      <Route path="/challenge">
        <Challenge />
      </Route>
      <Route path="/">
        <Profile />
      </Route>
    </Switch>
  </Router>
  </div>
  )
}

export default App;
