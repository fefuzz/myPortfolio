import React from 'react'

import InfoLong from '../InfoLong'

function InterestsInfo(props) {

    let lang = props.lang;

    return (
        <div className='InterestsInfo'>

            <h3> - {lang.pages.interests.main_title} - </h3>

            {
            lang.pages.interests.infos.map(elem => {
                return <InfoLong 
                    year={elem.year} 
                    textTitle={elem.title} 
                    textSubTitle={elem.subtitle} 
                    textParag={elem.parag} 
                    textTechnologies={elem.technologies}
                />
            })
            }
            
        </div>
    )
}

export default InterestsInfo
