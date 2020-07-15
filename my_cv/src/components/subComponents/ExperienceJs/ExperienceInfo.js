import React from 'react'
import InfoLong from '../InfoLong'

function ExperienceInfo() {
    return (
        <div className='ExperienceInfo'>

            <h3> - Experience - </h3>

            <InfoLong 
                year={'03/2017 05/2017'} 
                textTitle={'Sviluppo di un\'Applicazione operante in ambito marittimo'} 
                textSubTitle={'Tirocinio Formativo - Genesy s.r.l. - Pisa'} 
                textParag={'Per il calcolo dell\'inclinazione di un\'imbarcazione, utilizzando dati provenienti da Accelerometro e Giroscopio. Utilizzo di un algoritmo di Sensor Fusion basato su Filtro di Kalman, per Gestione e Rielaborazione delle misurazioni date dai sensori al fine di fornire misurazioni esenti da errori tipici presenti nell\'utilizzo singolo dei componenti.'}
                textTechnologies={'Linguaggio C'}
            />

            <InfoLong 
                year={'03/2018 06/2018'} 
                textTitle={'Sviluppo e Gestione di un database relazionale relativo ad una realtà aziendale'} 
                textSubTitle={'Progetto Formativo - Università di Pisa - Pisa'} 
                textParag={'Realizzazione del database relativo ad una società di palestre operante (idealmente) a livello nazionale, con varie sedi e servizi offerti.'}
                textTechnologies={'MySQL | Diagrammi E-R | Strumenti dell\'Ingegneria del software'}
            />

            <InfoLong 
                year={'10/2018 02/2019'} 
                textTitle={'Progettazione e Sviluppo di una Applicazione Client-Server'} 
                textSubTitle={'Progetto Formativo - Università di Pisa - Pisa'} 
                textParag={'Per scambio dati tramite protocollo TFTP, utilizzando meccanismi di programmazione Multi-Processo ed Interruzione di Programma.'}
                textTechnologies={'Linguaggio C'}
            />

            <InfoLong 
                year={'05/2019 08/2019'} 
                textTitle={'Progettazione e Sviluppo di una Applicazione WEB di gestione di una Palestra'} 
                textSubTitle={'Progetto Formativo - Università di Pisa - Pisa'} 
                textParag={'Implementazione dei livelli di Front-End e Back-End del servizio, con gestione del database per soddisfare requisiti di consistenza dei dati'}
                textTechnologies={'HTML5 | CSS3 | PHP | Javascript | MySQL'}
            />

            <InfoLong 
                year={'07/2019 12/2020'} 
                textTitle={'Progettazione, Sviluppo e Manutenzione di un tool per caricamento e gestione di questionari online'} 
                textSubTitle={'Progetto di Tesi e Progetto Lavorativo - IIT, CNR - Pisa'} 
                textParag={'Implementazione del sistema di upload di un file .CSV che genera dinamicamente un questionario. Progettazione del tool secondo le fasi proprie dell\'Ingegneria del Software, successiva implementazione del servizio (back-end e front-end) e successiva estensione tramite aggiunta di moduli per la gestione delle compilazioni'}
                textTechnologies={'Java (framework Springboot, Hibernate) | MySQL | HTML | CSS3 | JSP | NodeJs | Javascript ES6'}
            />

            <InfoLong 
                year={'10/2019 12/2020'} 
                textTitle={'Progettazione e Sviluppo di varie piattaforme web relative a progetti lavorativi'} 
                textSubTitle={'Progetti Lavorativi - IIT, CNR - Pisa'} 
                textParag={'Implementazione di piattaforme web a livello Back-end e Front-end utilizzando architettura REST'}
                textTechnologies={'Java (framework Springboot) | NodeJs (Express) | MySQL | HTML | CSS3 | JSP | NodeJs | Javascript ES6'}
            />

            <InfoLong 
                year={'10/2019 12/2020'} 
                textTitle={'Esperienza nella gestione di server web Apache2 e Tomcat'} 
                textSubTitle={'Progetti Lavorativi - IIT, CNR - Pisa'} 
                textParag={'Gestione di server web Apache2 in ambito lavorativo per fornire servizi web implementati in Java o NodeJs'}
                textTechnologies={'Apache2 | Tomcat'}
            />
            
        </div>
    )
}

export default ExperienceInfo
