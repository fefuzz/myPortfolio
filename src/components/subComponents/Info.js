import React from 'react'

import '../../styles/info.css'

function Info(props) {

    let year = props.year
    let title = props.textTitle
    let subTitle = props.textSubTitle
    let parag = props.textParag

    return (
        <div className="Info"> 
            <div className="infoYear"><h4>{year}</h4></div>
            <div className="infoDivisor"></div>
            <div className="infoText">
                <p className="infoParagSubTitle"><i>{subTitle}</i></p>
                <p className="infoParagTitle"><b>{title}</b></p>
                <p className="infoParagDesc">{parag}</p>
            </div>
        </div>
    )
}

export default Info
