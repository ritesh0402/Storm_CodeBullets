import EventCard from "./EventCard";
import React from 'react'


function DisplayEvents(props) {
   console.log(props.events)
   return (
      <div>
         <h2>{props.title}</h2>
         <ul>
            {props.events.map((event) => (
               <EventCard event={event}></EventCard>
            ))}
         </ul>
      </div>
   )
}

export default DisplayEvents

