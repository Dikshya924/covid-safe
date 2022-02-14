import React from 'react'
import './SliderCard.css'

function SliderCard({src,title,description}) {
    return (
        <div>
             <div className='cards'>
            <img src={src} alt=""/>
            <div className='card-infos'>
                <h2>{title}</h2>
                <p>{description}</p>
    


            </div>
            
            
        </div>
        </div>
    )
}

export default SliderCard
