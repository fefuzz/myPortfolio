import React, { useState } from "react";

import WelcomePage from "./components/WelcomePage";
import PresentationPage from "./components/PresentationPage";

function App() {

  //State of the application to change between the pages
  const [currPage, setPage] = useState('WELCOME_PAGE')

  var render = () => {
    if(currPage === 'WELCOME_PAGE'){
      return <WelcomePage setPage={setPage} />
    }
    if(currPage === 'PRESENTATION_PAGE'){
      return <PresentationPage setPage={setPage} />
    }
  };


  return (
    <div>
      {render()}
    </div>
  );
}

export default App;
