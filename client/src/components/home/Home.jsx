import DisplayEvents from "../events/DisplayEvents";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from "../../redux/actions/eventActions";

function Home() {
   const dispatch = useDispatch();
   const { events } = useSelector(state => state.getEvents)
   useEffect(() => {
      dispatch(getEvents())
      console.log(events)
   }, [dispatch])
   let upComingEvent = [];
   let pastEvent = [];
   events.map((evt) => {
      if (evt.startTime < Date.now()) {
         upComingEvent.push(evt)
      } else {
         pastEvent.push(evt)
      }
   })
   return (
      <div>
         <DisplayEvents events={upComingEvent} title={"Upcoming Events"}></DisplayEvents>
         <DisplayEvents events={pastEvent} title={"Past Events"}></DisplayEvents>
      </div>

   )
}

export default Home