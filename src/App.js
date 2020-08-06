import React, { useState } from "react";

import WelcomePage from "./components/WelcomePage";
import CareerPage from "./components/CareerPage";
import ExperiencePage from "./components/ExperiencePage";
import InterestsPage from "./components/InterestsPage";
import SkillsPage from "./components/SkillsPage";
import MobilePage from "./components/MobilePage";

function App() {

  //changind the document title
  document.title = 'Pierpaolo Vanni | My Portfolio'

  //State of the application to change between the pages
  const [currPage, setPage] = useState('WELCOME_PAGE')
  const [currLang, setLang] = useState('ENG')
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);


  /* To make responsive layout - Listen for windows resize */
  let windowsResize = () => {
    setWindowWidth(window.innerWidth);
  }

  window.addEventListener('resize', windowsResize);
  /* To make responsive layout - Listen for windows resize */

  let changePageAnimated = (unclickedBtn, clickedBtn, currPageDiv) => {
          
    let pageDiv = document.getElementsByClassName(currPageDiv)[0];
    pageDiv.style.opacity = 1;

    let btnUnclick = document.getElementsByClassName(unclickedBtn)[0];
    btnUnclick.style.opacity = 1;

    let btnLang = document.getElementsByClassName('Lang LangBtnTransition')[0];
    btnLang.style.opacity = 1;


    //setting a properties of the button to retrieve if it is next or prev button (more secure, hidden)
    btnUnclick.myType = unclickedBtn

    let btn = document.getElementsByClassName(clickedBtn)[0];

    //setting a properties of the button to retrieve if it is next or prev button (more secure, hidden)
    btn.myType = clickedBtn;


    //deleting CSS3 transition class from clicked button to avoid collisions with Javascript transition
    btn.classList.remove('BtnTransition');

    btn.style.backgroundColor = 'rgb(177, 177, 177)';
    btn.style.color = 'rgba(27, 30, 33, 1)';
    btn.style.left = 'initial';
    btn.style.right = 'initial';
    let initialBtnMargin = 0;
    let initialBtnWidth = 50;
    let initialBtnRadius = 0;

    if(clickedBtn === 'NextPage'){
      requestAnimationFrame(() => {
        animationSlide(pageDiv, btnUnclick, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn, btnLang)
      });
    }
    else if(clickedBtn === 'PrevPage') {
      requestAnimationFrame(() => {
        animationSlide(pageDiv, btnUnclick, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn, btnLang)
    });
    }
  }


  let animationSlide = (pageDiv, unckickedBtn, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn, btnLang) => {
    if(pageDiv.style.opacity > 0){
      pageDiv.style.opacity -= 0.5;
    }
    if(unckickedBtn.style.opacity > 0){
      unckickedBtn.style.opacity -= 0.1;
    }
    if(btnLang.style.opacity > 0){
      btnLang.style.opacity -=0.1;
    }

    let inc = 5.1 - (initialBtnMargin*0.1)

    initialBtnMargin += inc;
    initialBtnWidth -= 1;
    initialBtnRadius +=2;

    if(btn.myType === 'NextPage'){
      btn.style.right = initialBtnMargin + 'vw';
    }
    else if(btn.myType === 'PrevPage'){
      btn.style.left = initialBtnMargin + 'vw';
    }
    if(initialBtnWidth > 22){
      btn.style.width = initialBtnWidth + 'px'
    }

    if(initialBtnRadius < 50){
      btn.style.borderRadius = initialBtnRadius + '%';
    }

    btn.textContent = '';
    

    let frame = requestAnimationFrame(()=> {
      animationSlide(pageDiv, unckickedBtn, initialBtnMargin, initialBtnWidth, initialBtnRadius, btn, btnLang)
    });

    if(pageDiv.style.opacity <= 0 && initialBtnMargin >= 50){
        cancelAnimationFrame(frame)
        setTimeout(animationBtnOpen(btn, 0 , 0), 20);
    }
}

let animationBtnOpen = (btn, initialWidth, initialHeight) => {

  initialWidth += 12;
  initialHeight += 24;
  
  btn.style.right='unset';
  btn.style.left='unset';
  btn.style.width = initialWidth + 'vw';
  btn.style.height = initialHeight + 'vh';

  let frame = requestAnimationFrame(() => {
    animationBtnOpen(btn, initialWidth, initialHeight);
  })

  if(initialHeight >= 150 && initialWidth >= 150){
      cancelAnimationFrame(frame)

      //Changing pages based on button type
      if(btn.myType === 'NextPage'){ //if next button go to next page
        if(currPage === 'WELCOME_PAGE'){ setPage('CAREER_PAGE');}
        if(currPage === 'CAREER_PAGE') { setPage('EXPERIENCE_PAGE'); }
        if(currPage === 'EXPERIENCE_PAGE') { setPage('INTERESTS_PAGE'); }
        if(currPage === 'INTERESTS_PAGE') { setPage('SKILLS_PAGE'); }
        if(currPage === 'SKILLS_PAGE') { setPage('WELCOME_PAGE'); }
      }
      else if (btn.myType === 'PrevPage'){ //if prev button go to prev page
        if(currPage === 'WELCOME_PAGE'){ setPage('SKILLS_PAGE');}
        if(currPage === 'CAREER_PAGE') { setPage('WELCOME_PAGE'); }
        if(currPage === 'EXPERIENCE_PAGE') { setPage('CAREER_PAGE'); }
        if(currPage === 'INTERESTS_PAGE') { setPage('EXPERIENCE_PAGE'); }
        if(currPage === 'SKILLS_PAGE') { setPage('INTERESTS_PAGE'); }
      }
  }
}

  var renderFullPage = () => {
    if(currPage === 'WELCOME_PAGE'){
      return (
        <WelcomePage 
          changePageAnimatedNext={() => {changePageAnimated('PrevPage', 'NextPage', 'WelcomeDiv')}} 
          changePageAnimatedPrev={() => {changePageAnimated('NextPage', 'PrevPage', 'WelcomeDiv')}}
          currLang={currLang} setLangIta={() => {setLang('ITA')}} setLangEng={()=>{setLang('ENG')}} isMobile={0}
        />
      )
    }
    if(currPage === 'CAREER_PAGE'){
      return (
        <CareerPage 
          changePageAnimatedNext={() => {changePageAnimated('PrevPage', 'NextPage', 'CareerDiv')}} 
          changePageAnimatedPrev={() => {changePageAnimated('NextPage', 'PrevPage', 'CareerDiv')}}
          currLang={currLang} setLangIta={() => {setLang('ITA')}} setLangEng={()=>{setLang('ENG')}}
        />
      )
    }
    if(currPage === 'EXPERIENCE_PAGE'){
      return (
        <ExperiencePage 
          changePageAnimatedNext={() =>{changePageAnimated('PrevPage', 'NextPage', 'ExperienceDiv')}} 
          changePageAnimatedPrev={() => {changePageAnimated('NextPage', 'PrevPage', 'ExperienceDiv')}}
          currLang={currLang} setLangIta={() => {setLang('ITA')}} setLangEng={()=>{setLang('ENG')}}
        />
      )
    }
    if(currPage === 'INTERESTS_PAGE'){
      return (
        <InterestsPage
          changePageAnimatedNext={() =>{changePageAnimated('PrevPage', 'NextPage', 'InterestsDiv')}} 
          changePageAnimatedPrev={() => {changePageAnimated('NextPage', 'PrevPage', 'InterestsDiv')}}
          currLang={currLang} setLangIta={() => {setLang('ITA')}} setLangEng={()=>{setLang('ENG')}}
        />
      )
    }
    if(currPage === 'SKILLS_PAGE'){
      return (
        <SkillsPage
          changePageAnimatedNext={() =>{changePageAnimated('PrevPage', 'NextPage', 'SkillsDiv')}} 
          changePageAnimatedPrev={() => {changePageAnimated('NextPage', 'PrevPage', 'SkillsDiv')}}
          currLang={currLang} setLangIta={() => {setLang('ITA')}} setLangEng={()=>{setLang('ENG')}}
        />
      )
    }
  };

  var renderSimplePage = () => {
    return (   
      <MobilePage currLang={currLang} setLangIta={() => {setLang('ITA')}} setLangEng={()=>{setLang('ENG')}} isMobile={1}/>
    )
  }


  var renderResponsive = () => {
    if(windowWidth >= 1000){
      return renderFullPage();
    }
    else{
      return renderSimplePage();
    }
  }

  return (
    <div>
      {renderResponsive()}
    </div>
  );
}

export default App;
