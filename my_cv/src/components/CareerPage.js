import React from 'react';

import '../styles/career.css'
import NextPage from './subComponents/NextPageBtn';
import PrevPageBtn from './subComponents/PrevPageBtn';

import CareerDiv from './subComponents/CareerJs/Career';

function CareerPage(props) {

    let changePageAnimatedNext = props.changePageAnimatedNext;
    let changePageAnimatedPrev = props.changePageAnimatedPrev;

    return (
        <div className='CareerPage'>
            <CareerDiv />
            <NextPage changePageAnimatedNext={changePageAnimatedNext} currDiv={'CareerDiv'}/> 
            <PrevPageBtn changePageAnimatedPrev={changePageAnimatedPrev} currDiv={'CareerDiv'} />
        </div>
    )
}

export default CareerPage
