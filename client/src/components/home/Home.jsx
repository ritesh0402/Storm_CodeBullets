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
         <div>
            <div id="carouselExampleIndicators" className="carousel slide">
               <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                     <img src="..." className="d-block w-100" alt="..." />
                  </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>

         <DisplayEvents events={upComingEvent} title={"Upcoming Events"}></DisplayEvents>
         <DisplayEvents events={pastEvent} title={"Past Events"}></DisplayEvents>
      </div>

   )
}

export default Home