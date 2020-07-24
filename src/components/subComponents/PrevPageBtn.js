import React from 'react'

import '../../styles/nav_page_btn.css'

function PrevPageBtn(props) {
    
    let changePageAnimated = props.changePageAnimatedPrev;
    let currDiv = props.currDiv;

    let setNextPage = () => {
        //setting the new page with the page passed by the upper level component
        changePageAnimated();
    }

    let openButton = () => {
        let div = document.getElementsByClassName(currDiv)[0];
        let nextPageBtn = document.getElementsByClassName('NextPage')[0];
        div.style.marginLeft = '50px';
        nextPageBtn.style.marginLeft = '97vw'

    }

    let closeButton = () => {
        let div = document.getElementsByClassName(currDiv)[0];
        let nextPageBtn = document.getElementsByClassName('NextPage')[0];
        div.style.marginLeft = '0';
        nextPageBtn.style.marginLeft = '95vw'
    }




    return (
        <div className='PrevPage BtnTransition' onClick={setNextPage} onMouseOver={openButton} onMouseLeave={closeButton}>
            <p></p>
        </div>
    )
}

export default PrevPageBtn
