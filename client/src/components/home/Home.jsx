import DisplayEvents from "../events/DisplayEvents";
import React from 'react'
import axios from 'axios';
import asyncWrapper from "../../utils"

function Home() {
   let pastEvents = [];
   let upcommingEvents = [];
   async function fetchEvents() {
      await axios.get("https://127.0.0.1:5000/getAllEvents")
         .then((res) => {
            res.forEach((x) => {
               if (x.time < Date.now()) {
                  pastEvents.push(x);
               } else {
                  upcommingEvents.push(x);
               }
            });

         })
         .catch((err) => {
            console.log("An error occured");
            console.log(err);
         });
   }

   const events = asyncWrapper(fetchEvents());
   return (
      <div>
         <DisplayEvents events={pastEvents} titlt={"Past Events"}></DisplayEvents>
         <DisplayEvents events={upcommingEvents} titlt={"Upcomming Events"}></DisplayEvents>
      </div>
   )
}

export default Home