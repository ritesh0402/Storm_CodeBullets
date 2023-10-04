import DisplayEvents from "../events/DisplayEvents";
import React, {useEffect} from 'react';
import asyncWrapper from "../../utils"
import {useSelector, useDispatch} from 'react-redux'
import { getEvents } from "../../redux/actions/eventActions";

function Home() {
   const dispatch = useDispatch();
   const {events} = useSelector(state => state.getEvents)
   useEffect(()=>{
      dispatch(getEvents())
   }, [dispatch])
   return (
      <div>
         <DisplayEvents events={events} title={"Past Events"}></DisplayEvents>
         <DisplayEvents events={events} title={"Upcomming Events"}></DisplayEvents>
      </div>

   )
}

export default Home