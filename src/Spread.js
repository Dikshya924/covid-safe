import React from 'react'
import './Spread.css'
import Cards from './Cards'
function Spread() {
    return (
        <div className="spread">
            <div className="topics">
            <h3 id="title">How Does Corona Virus Spread?</h3>
            <h2 className="info__h2">HOW DOES IT SPREADS</h2>
            </div>
            <div className="Cards">
            <Cards
                src="https://www.sciencenews.org/wp-content/uploads/2020/06/060920_JL_cough_feat-1028x579.jpg"
                title="Human Contact"
                description="COVID-19 is thought to spread mainly through close contact from person-person in respiratory droplets from someone who is inflected, People who are inflected with Coronavirus often have symptopms of illness"
            />
             <Cards
                src="https://s.yimg.com/ny/api/res/1.2/.mNecEfY3Crdl3DZLA_nGA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ1My41NjQxNTAwNjk0NzY2/https://s.yimg.com/uu/api/res/1.2/5jHw3xaMl47LTHxNYnmtzg--~B/aD0xMzg5O3c9MjE1OTtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/2b5caf80-99e0-11ea-99cf-fc82c394babd"
                title="Contaminated Objects"
                description="It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth,nose or possibly their eyes. this is not thought to be the main way the virus spreads"
            />
             <Cards
                src="https://cdn.mos.cms.futurecdn.net/8FT8RnjHL9Uz28hs6FqL7E-970-80.jpg.webp"
                title="Social Distancing"
                description="If an inflected person coughs or sneezes their droplets can inflect people nearby. That's why it's important to avoid close contact with others. Understand that people may be inflected and have only to no symptoms ar all"
            />

            </div>
           
        </div>
    )
}

export default Spread
