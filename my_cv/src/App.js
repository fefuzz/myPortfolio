import React, { useState } from "react";

import WelcomePage from "./components/WelcomePage";
import CareerPage from "./components/CareerPage";

function App() {

  //State of the application to change between the pages
  const [currPage, setPage] = useState('WELCOME_PAGE')


  let changePageAnimatedWelcome = () => {
        
    let pageDiv = document.getElementsByClassName('WelcomeDiv')[0];
    pageDiv.style.opacity = 1;

    let btn = document.getElementsByClassName('NextPage')[0];
    btn.style.backgroundColor = 'rgb(177, 177, 177)';
    btn.style.color = 'rgba(27, 30, 33, 1)';
    let initialMargin = 95;

    requestAnimationFrame(() => {
        animationSlide(pageDiv, initialMargin, btn)
    });
}

let changePageAnimatedPresentation = () => {
        
  let pageDiv = document.getElementsByClassName('CareerDiv')[0];
  pageDiv.style.opacity = 1;

  let btn = document.getElementsByClassName('NextPage')[0];
  btn.style.backgroundColor = 'rgb(177, 177, 177)';
  btn.style.color = 'rgba(27, 30, 33, 1)';
  let initialMargin = 95;

  requestAnimationFrame(() => {
      animationSlide(pageDiv, initialMargin, btn)
  });
}

let animationSlide = (pageDiv, initialMargin, btn) => {
    if(pageDiv.style.opacity > 0){
      pageDiv.style.opacity -= 0.5;
    }

    let dec = 0.1 + (initialMargin*0.09)

    initialMargin -= dec;
    btn.style.marginLeft = initialMargin + 'vw';

    let frame = requestAnimationFrame(()=> {
        animationSlide(pageDiv, initialMargin, btn)
    });

    if(pageDiv.style.opacity <= 0 && initialMargin <= 0){
        cancelAnimationFrame(frame)
        openBtnAnimated();
    }
}


let openBtnAnimated = () => {

    let btn = document.getElementsByClassName('NextPage')[0];
    let initialWidth = 30;
    let initialHeight = 30;

    requestAnimationFrame(() => {
        animationOpen(btn, initialWidth, initialHeight)
    })

}

let animationOpen = (btn, initialWidth, initialHeight) => {
    initialWidth += 5;
    initialHeight += 11;
    btn.style.width = initialWidth + 'vw';
    btn.style.height = initialHeight + 'vh';

    let frame = requestAnimationFrame(() => {
        animationOpen(btn, initialWidth, initialHeight);
    })

    if(initialHeight >= 150 && initialWidth >= 150){
        cancelAnimationFrame(frame)
        if(currPage === 'WELCOME_PAGE'){ setPage('PRESENTATION_PAGE');}
        if(currPage === 'PRESENTATION_PAGE') { setPage('WELCOME_PAGE'); }
    }
}

  var render = () => {
    if(currPage === 'WELCOME_PAGE'){
      return <WelcomePage changePageAnimated={changePageAnimatedWelcome}/>
    }
    if(currPage === 'PRESENTATION_PAGE'){
      return <CareerPage changePageAnimated={changePageAnimatedPresentation}/>
    }
  };


  return (
    <div>
      {render()}
    </div>
  );
}

export default App;
