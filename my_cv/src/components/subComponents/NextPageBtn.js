import React from 'react'

import '../../styles/nav_page_btn.css'

function NextPageBtn(props) {

    let changePageAnimated = props.changePageAnimatedNext;
    let currDiv = props.currDiv;

    let setNextPage = () => {
        //setting the new page with the page passed by the upper level component
        changePageAnimated();
    }

    let openButton = () => {
        let div = document.getElementsByClassName(currDiv)[0];
        let prevPageBtn = document.getElementsByClassName('PrevPage')[0];
        div.style.marginRight = '50px';
        prevPageBtn.style.marginRight = '97vw'
    }

    let closeButton = () => {
        let div = document.getElementsByClassName(currDiv)[0];
        let prevPageBtn = document.getElementsByClassName('PrevPage')[0];

        div.style.marginRight = '0';
        prevPageBtn.style.marginRight = '95vw'
    }




    return (
        <div className='NextPage BtnTransition' onClick={setNextPage} onMouseOver={openButton} onMouseLeave={closeButton}>
            <p></p>
        </div>
    )
}

export default NextPageBtn
