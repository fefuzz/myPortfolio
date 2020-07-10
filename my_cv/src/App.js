import React, { useState } from "react";

import WelcomePage from "./components/WelcomePage";

function App() {

  function Welcome() {return <WelcomePage />}

  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
