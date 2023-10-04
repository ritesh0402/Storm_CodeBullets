import DisplayEvents from "../events/DisplayEvents"
import Stats from "./Stats";
import axios from 'axios';
import React from 'react'

function Dashboard() {
   let pastEvents = [];
   let upcommingEvents = [];
   async function fetchEvents() {
      await axios.get("https://127.0.0.1:5000/getEventsRegisteredByUser")
         .then((res) => {
            res.data.forEach((x) => {
               if (x.time < Date.now()) {
                  pastEvents.push(x);
               } else {
                  upcommingEvents.push(x);
               }
            });
            // console.log(pastEvents);
            // console.log(upcommingEvents);

         })
         .catch((err) => {
            console.log("An error occured");
            console.log(err);
         });
   }

   fetchEvents()
   return (
      <div>
         <DisplayEvents events={[]} title={"My Events"}></DisplayEvents>
         <DisplayEvents events={[]} title={"Registered Events"}></DisplayEvents>
      </div>
   )
}

export default Dashboard