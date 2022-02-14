import React from 'react'
import './Info.css'
import Prevention from './Prevention'
import Spread from './Spread'


import Symptoms from './Symptoms'

function Info() {
    return (
        <div className="contain">
            <div className="detail">
            <div className="info">
                <h3 id="title">ABOUT THE DISEASE</h3>
                <br/>
                <h2 className="info__h2">WHAT IS CORONA VIRUS?</h2>
                <br/>
                <p>Coronaviruses are a type of virus. 
                    There are many different kinds, and some cause disease. 
                    A newly identified type has caused a recent outbreak of respiratory 
                    illness now called COVID-19.</p>
            </div>
            <div class="vedio">
            <iframe width="700" height="400" src="https://www.youtube.com/embed/5DGwOJXSxqg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
            
            <br/>
            <br/>
            

            <Spread/>
            <Symptoms/>
            <Prevention/>
          
         
        </div>
    )
}

export default Info
