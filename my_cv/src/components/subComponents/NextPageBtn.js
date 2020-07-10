import React from 'react'

import '../../styles/next_page_btn.css'

function NextPageBtn(props) {

    let setPage = props.setPage;

    let setNextPage = () => {
        //setting the new page with the page passed by the upper level component
        setPage()
    }



    return (
        <div className='NextPage' onClick={setNextPage}>
            <h3>next</h3>
        </div>
    )
}

export default NextPageBtn
