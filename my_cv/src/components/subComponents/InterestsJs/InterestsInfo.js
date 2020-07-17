import React from 'react'

import InfoLong from '../InfoLong'

function InterestsInfo() {
    return (
        <div className='InterestsInfo'>

            <h3> - Interests - </h3>

            <InfoLong 
                year={'2020'} 
                textTitle={'Il mio Portfolio'} 
                textSubTitle={'Progetto Personale - Pisa'} 
                textParag={'Mi ha sempre appassionato il Web Design, sono spinto nello sperimentare e giocare con tecnologie Front-End in ambito informatico. La nascita di framework che rendono il mondo della programmazione Front-End più strutturata e "Object-Oriented" (se così possiamo chiamarla) è stata una fonte di ispirazione enorme per me e questo mi ha spinto ad imparare ReactJs e i nuovi potenti standard CSS3, HTML5 e JS6. Nasce così questo mio Curriculum Vitae virtuale, tramite il quale voglio mostrare non solo la mia esperienza lavorativa e universitaria, ma anche quello che mi appassiona, un progetto esente dai vincoli che troppo spesso nel nostro lavoro tarpano le ali della creatività. Questo sito è completamente sviluppato utilizzando le tecnologie citate, la repo github è pubblica ed interamente visitabile al link []'}
                textTechnologies={'Javascript ES6 (ReactJs) | HTML5 | CSS3'}
            />
            
        </div>
    )
}

export default InterestsInfo
