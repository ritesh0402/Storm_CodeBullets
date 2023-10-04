import * as actionTypes from '../constants'
import { getEventsAPI, getUserEventsAPI } from '../../service/api'

export const getEvents = () => async(dispatch) =>{
    try{
        let {data} = await getEventsAPI();
        dispatch({type : actionTypes.GET_EVENTS_SUCCESS, payload : data })
    }
    catch(error){
        dispatch({type : actionTypes.GET_EVENTS_FAIL, payload : error.message})
    }
}

export const getUserEvents = () => async(dispatch) => {
    try{
        let {data} = await getUserEventsAPI();
        dispatch({type : actionTypes.GET_USER_EVENTS_SUCCESS, payload : data})
    }
    catch(error){
        dispatch({type : actionTypes.GET_USER_EVENTS_FAIL, payload : error.message});
    }
}


