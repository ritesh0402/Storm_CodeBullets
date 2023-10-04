import DisplayEvents from "../events/DisplayEvents";
import React from 'react'
import { getEvents } from '../../service/api';
import asyncWrapper from "../../utils"

function Home() {
   const data = getEvents();
   console.log(data)
   return (
      data &&
      <div>
         <DisplayEvents events={data[0]} title={"Past Events"}></DisplayEvents>
         <DisplayEvents events={data[1]} title={"Upcomming Events"}></DisplayEvents>
      </div>

   )
}

export default Home