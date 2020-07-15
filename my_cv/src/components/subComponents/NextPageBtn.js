import React from 'react'

import '../../styles/next_page_btn.css'

function NextPageBtn(props) {

    let changePageAnimated = props.changePageAnimated;
    let currDiv = props.currDiv;

    let setNextPage = () => {
        //setting the new page with the page passed by the upper level component
        changePageAnimated();
    }

    let openButton = () => {
        let div = document.getElementsByClassName(currDiv)[0];
        div.style.marginRight = '50px';
    }

    let closeButton = () => {
        let div = document.getElementsByClassName(currDiv)[0];
        div.style.marginRight = '0';
    }




    return (
        <div className='NextPage' onClick={setNextPage} onMouseOver={openButton} onMouseLeave={closeButton}>
            <p></p>
        </div>
    )
}

export default NextPageBtn
