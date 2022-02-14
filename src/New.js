import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import SliderCard from './SliderCard'
const breakpoint=[
   {width: 1, itemsToShow:1 },
   {width: 558, itemsToShow:2},
   {width: 768, itemsToShow:3},
   
]
    
        
    

function New(){
    
    return (
        <Carousel breakPoints={breakpoint}>
          <SliderCard
              src="https://previews.123rf.com/images/avictorero/avictorero2003/avictorero200300080/142663615-home-with-family-inside-icon-with-message-stay-at-home-coronavirus-covid-19-virus-quarantine-campaig.jpg"
              title="Stay Home"
              description="Stay home helps you stay safe by not getting affected by meeting any inflected person in contact."
          />
          <SliderCard
              src="https://thumbs.dreamstime.com/b/print-179527668.jpg"
              title="Avoid Human Interaction"
              description="COVID-19 is thought to spread mainly through close contact from person-to-person in respiratory droplets."
          />
          <SliderCard
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm9n6q0dP5ZWf1vbnzEsEmhv7ySFoyWLGPTg&usqp=CAU"
              title="Avoid Social Gatherings"
              description="If an inflected person coughs or sneezes, their inflected droplets can infect many people nearby."
          />
          <SliderCard
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgNEgR7Uqzg8-rzTTJE5GezsN5JYuuBduYVQ&usqp=CAU"
              title="Regular Hands Hygiene"
              description="Regular handwashing is one of the best ways to remove germs, avoid getting sick, and prevent the spread"
          />
          <SliderCard
              src="https://thumbs.dreamstime.com/b/prevention-coronavirus-social-distance-self-isolation-vector-icon-silhouette-woman-man-them-isolated-177132390.jpg"
              title="Maintain Social Distance"
              description="Regular handwashing is one of the best ways to remove germs, avoid getting sick, and prevent the spread"
          />
          <SliderCard
              src="https://transportnsw.info/sites/default/files/image/2020/08/face-mask-story.jpg"
              title="Use Face Mask"
              description="Cover mouth and nose with mask and make sure there are no gaps between your face and the mask"
          />
         
        
        
        </Carousel>
      )
}
    
   
 
export default New
