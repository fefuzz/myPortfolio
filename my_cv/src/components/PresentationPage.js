import React from 'react';

import '../styles/presentation.css'
import NextPage from './subComponents/NextPageBtn';

function PresentationPage(props) {

    let setPage = props.setPage;

    let changePageAnimated = () => {
        
        let pageDiv = document.getElementsByClassName('PresentationPage')[0];
        pageDiv.style.opacity = 1;

        let myTimer = setInterval( () => {
            pageDiv.style.opacity -= 0.1;
            if(pageDiv.style.opacity <= 0){
                clearInterval(myTimer);
                setPage('WELCOME_PAGE')
            }
        }, 20);
    }

    return (
        <div className='PresentationPage'>
            <p>PRESENTAZIONI</p>
            <NextPage setPage={changePageAnimated}/> 
        </div>
    )
}

export default PresentationPage
