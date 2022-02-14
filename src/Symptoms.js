import React from 'react'
import Cards from './Cards'
import'./Symptoms.css'
function Symptoms() {
    return (
        <div className="symptoms">
        <div className="topic">
        <h3 id="title">You might be inflected?</h3>
        <h2 className="info__h2">KNOWN COVID-19 <br/>SYMPTOMS</h2>
        </div>
        <div className="Cards">
            
        <Cards
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/SymptomsFeverCoughSOB_%28cropped%29.jpg"
            title="shortness of Breath"
            description="One of the symptopms of covid-19 is shortness of breath. Shortness of breath is less common than fever anf cough, but happens in about 30% of people."
        />
         <Cards
            src="data:image/jpeg;base64,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"
            title="Sore Throat"
            description="A sore throat is one of the early, mild symptoms of coronavirus. If you suddenly develop a sore throat, it's best to self-isolate to 14 days as precaution"
        />
        

        </div>
        <div className="Cards">
         <Cards
            src="https://post.healthline.com/wp-content/uploads/2020/04/male_coughing_bed_sick-732x549-thumbnail-732x549.jpg"
            title="Cough"
            description="Continuous cough- this means coughing a lot for more than an hour or 3 more coughing episodes in 24 hours(if you usually have a cough, it may be worse)"
        />
        <Cards
            src="data:image/jpeg;base64,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"
            title="Fever"
            description="High temperature – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is best to seek medical care early."
        />
        <Cards
            src="data:image/jpeg;base64,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"
            title="Headache"
            description="A headache isn't a common symptom of the virus, but about 14% of people infected with corona have experienced it. It can be pretty intense in nature."
        />
         </div>
       
       
    </div>

    )
}

export default Symptoms