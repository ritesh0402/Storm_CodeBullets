import EventCard from "./EventCard";
import React from 'react'


function DisplayEvents(props) {
   // console.log(props.events)
   return (
      <div>
         <h2>{props.title}</h2>
         <ul>
            {props.events.map(evt => {
               return <li><EventCard evt={evt}></EventCard></li>
            })}
         </ul>
      </div>
   )
}

export default DisplayEvents

