import React, { useState } from "react";

import WelcomePage from "./components/WelcomePage";
import CareerPage from "./components/CareerPage";
import ExperiencePage from "./components/ExperiencePage";

function App() {

  //State of the application to change between the pages
  const [currPage, setPage] = useState('WELCOME_PAGE')


  let changePageAnimatedWelcome = () => {
        
    let pageDiv = document.getElementsByClassName('WelcomeDiv')[0];
    pageDiv.style.opacity = 1;

    let btn = document.getElementsByClassName('NextPage')[0];
    btn.style.backgroundColor = 'rgb(177, 177, 177)';
    btn.style.color = 'rgba(27, 30, 33, 1)';
    let initialBtnMargin = 95;
    let initialBtnWidth = 50;
    let initialBtnRadius = 0;

    requestAnimationFrame(() => {
        animationSlide(pageDiv, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn)
    });
}

let changePageAnimatedCareer = () => {
        
  let pageDiv = document.getElementsByClassName('CareerDiv')[0];
  pageDiv.style.opacity = 1;

  let btn = document.getElementsByClassName('NextPage')[0];
  btn.style.backgroundColor = 'rgb(177, 177, 177)';
  btn.style.color = 'rgba(27, 30, 33, 1)';
  let initialBtnMargin = 95;
  let initialBtnWidth = 50;
  let initialBtnRadius = 0;

  requestAnimationFrame(() => {
      animationSlide(pageDiv, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn)
  });
}

let changePageAnimatedExperience = () => {
        
  let pageDiv = document.getElementsByClassName('ExperienceDiv')[0];
  pageDiv.style.opacity = 1;

  let btn = document.getElementsByClassName('NextPage')[0];
  btn.style.backgroundColor = 'rgb(177, 177, 177)';
  btn.style.color = 'rgba(27, 30, 33, 1)';
  let initialBtnMargin = 95;
  let initialBtnWidth = 50;
  let initialBtnRadius = 0;

  requestAnimationFrame(() => {
      animationSlide(pageDiv, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn)
  });
}

let animationSlide = (pageDiv, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn) => {
    if(pageDiv.style.opacity > 0){
      pageDiv.style.opacity -= 0.5;
    }

    let dec = 0.1 + (initialBtnMargin*0.09)

    initialBtnMargin -= dec;
    initialBtnWidth -= 1;
    initialBtnRadius +=2;
    btn.style.marginLeft = initialBtnMargin + 'vw';

    if(initialBtnWidth > 22){
      btn.style.width = initialBtnWidth + 'px'
    }

    if(initialBtnRadius < 50){
      btn.style.borderRadius = initialBtnRadius + '%';
    }

    btn.textContent = '';
    

    let frame = requestAnimationFrame(()=> {
        animationSlide(pageDiv, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn)
    });

    if(pageDiv.style.opacity <= 0 && initialBtnMargin <= 0){
        cancelAnimationFrame(frame)
        setTimeout(openBtnAnimated(), 20);
    }
}


let openBtnAnimated = () => {

    let btn = document.getElementsByClassName('NextPage')[0];
    let initialWidth = 0;
    let initialHeight = 0;

    requestAnimationFrame(() => {
      animationOpenNext(btn, initialWidth, initialHeight)
    })

}

let animationOpenNext = (btn, initialWidth, initialHeight) => {
    initialWidth += 12;
    initialHeight += 24;
    
    btn.style.width = initialWidth + 'vw';
    btn.style.height = initialHeight + 'vh';

    let frame = requestAnimationFrame(() => {
      animationOpenNext(btn, initialWidth, initialHeight);
    })

    if(initialHeight >= 150 && initialWidth >= 150){
        cancelAnimationFrame(frame)
        if(currPage === 'WELCOME_PAGE'){ setPage('CAREER_PAGE');}
        if(currPage === 'CAREER_PAGE') { setPage('EXPERIENCE_PAGE'); }
        if(currPage === 'EXPERIENCE_PAGE') { setPage('WELCOME_PAGE'); }
    }
}

  var render = () => {
    if(currPage === 'WELCOME_PAGE'){
      return <WelcomePage changePageAnimated={changePageAnimatedWelcome}/>
    }
    if(currPage === 'CAREER_PAGE'){
      return <CareerPage changePageAnimated={changePageAnimatedCareer}/>
    }
    if(currPage === 'EXPERIENCE_PAGE'){
      return <ExperiencePage changePageAnimated={changePageAnimatedExperience}/>
    }
  };


  return (
    <div>
      {render()}
    </div>
  );
}

export default App;
