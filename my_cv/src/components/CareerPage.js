import React from 'react';

import '../styles/career.css'
import NextPage from './subComponents/NextPageBtn';
import CareerDiv from './subComponents/PresentationJs/Career';

function CareerPage(props) {

    let changePageAnimated = props.changePageAnimated;

    return (
        <div className='CareerPage'>
            <CareerDiv />
            <NextPage changePageAnimated={changePageAnimated} currDiv={'CareerDiv'}/> 
        </div>
    )
}

export default CareerPage
