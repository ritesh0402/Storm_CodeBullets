import EventCard from "./EventCard";
import React from 'react'


function DisplayEvents(props) {
   return (
      <div>
         <h2>{props.title}</h2>
         <ul>
            {props.events.forEach((event) => {
               <EventCard event={event}></EventCard>
            })}
         </ul>
      </div>
   )
}

export default DisplayEvents

