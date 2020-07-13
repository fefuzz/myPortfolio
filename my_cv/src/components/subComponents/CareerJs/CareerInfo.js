import React from 'react'
import Info from './Info'

function CareerInfo() {
    return (
    <div className='CareerInfo'>
        <h3> - Education - </h3>

        <Info year={'2013'} textTitle={'ITN Leone Acciaiuoli'} textSubTitle={'Diploma di scuola secondaria di secondo grado'} textParag={'Aspirante al comando di Navi Mercantili'}/>
        <Info year={'2019'} textTitle={'Università di Pisa - Ingegneria Informatica'} textSubTitle={'Laurea di Primo Livello'} textParag={'Dottore Triennale in Ingegneria Informatica con votazione 99/110'}/>

    </div>
    )
}

export default CareerInfo
