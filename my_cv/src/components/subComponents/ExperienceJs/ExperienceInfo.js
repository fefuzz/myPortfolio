import React from 'react'
import InfoLong from '../InfoLong'

function ExperienceInfo(props) {

    let lang = props.lang;

    return (
        <div className='ExperienceInfo'>

            <h3> - {lang.experience.main_title} - </h3>
{
            lang.experience.infos.map(elem => {
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

export default ExperienceInfo
