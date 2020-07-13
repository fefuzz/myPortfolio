import React from 'react'

function Info(props) {

    let year = props.year
    let title = props.textTitle
    let subTitle = props.textSubTitle
    let parag = props.textParag

    return (
    <div class="Info"> 
            <div className="infoYear"><h4>{year}</h4></div>
            <div className="infoDivisor"></div>
            <div className="infoText">
                <p><b>{title}</b> - <i>{subTitle}</i></p>
                <p>{parag}</p>
            </div>
    </div>
    )
}

export default Info
