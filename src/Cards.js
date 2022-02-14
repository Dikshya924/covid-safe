import React from 'react'
import './Cards.css'

function Cards({src,title,description,symtom}) {
    return (
        <div className='card'>
            <img src={src} alt=""/>
            <div className='card-info'>
                <h2>{title}</h2>
                <p>{description}</p>
    


            </div>
            
            
        </div>
    )
}

export default Cards
