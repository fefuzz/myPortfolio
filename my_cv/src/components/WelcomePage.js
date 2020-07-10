import React from 'react'

import WelcomeDiv from './subComponents/WelcomeJs/WelcomeDiv'
import NextPageBtn from './subComponents/NextPageBtn'

import '../styles/welcome.css'

function WelcomePage(props) {

    let setPage = props.setPage


    let changePageAnimated = () => {
        
        let welcomePageDiv = document.getElementsByClassName('WelcomePage')[0];
        welcomePageDiv.style.opacity = 1;

        let myTimer = setInterval( () => {
            welcomePageDiv.style.opacity -= 0.1;
            if(welcomePageDiv.style.opacity <= 0){
                clearInterval(myTimer);
                setPage('PRESENTATION_PAGE')
            }
        }, 20);
    }

    return ( 
        <div className='WelcomePage'> 
            <WelcomeDiv /> 
            <NextPageBtn setPage={changePageAnimated}/> 
        </div>
    )
}

export default WelcomePage
