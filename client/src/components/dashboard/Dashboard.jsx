import DisplayEvents from "../events/DisplayEvents"
import Stats from "./Stats";
import React from 'react'

function Dashboard() {
   return (
      <div>
         <Dashboard events={[]} title={"My Events"}></Dashboard>
         <Dashboard events={[]} title={"Registered Events"}></Dashboard>
      </div>
   )
}

export default Dashboard