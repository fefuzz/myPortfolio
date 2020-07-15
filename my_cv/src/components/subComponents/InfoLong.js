import React from 'react'

import '../../styles/info_long.css'

function InfoLong(props) {

    let year = props.year
    let title = props.textTitle
    let subTitle = props.textSubTitle
    let parag = props.textParag
    let tech = props.textTechnologies

    return (
        <div className='InfoLong'>
            <div className="infoLongYear"><h4>{year}</h4></div>
            <div className="infoLongDivisor"></div>
            <div className="infoLongText">
                <p className="infoLongParagSubTitle"><i>{subTitle}</i></p>
                <p className="infoLongParagTitle"><b>{title}</b></p>
                <p className="infoLongParagDesc">{parag}</p>
                <p className="infoLongParagTech"><b><i>{tech}</i></b></p>
            </div>
        </div>
    )
}

export default InfoLong
