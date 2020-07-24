import React from 'react'
import Info from '../Info'

function CareerInfo(props) {

    let lang = props.lang;

    return (
    <div className='CareerInfo'>
        <h3> - {lang.pages.education.main_title} - </h3>

        {
            lang.pages.education.infos.map(elem => {
                return <Info year={elem.year} textTitle={elem.title} textSubTitle={elem.subtitle} textParag={elem.parag}/>
            })
        }
    </div>
    )
}

export default CareerInfo
