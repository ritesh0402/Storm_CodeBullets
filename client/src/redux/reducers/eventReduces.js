import * as actionType from '../constants'


export const getEventsReducer = (state = { events: [] }, action) => {
   switch (action.type) {
      case actionType.GET_EVENTS_SUCCESS:
         return { events: action.payload }
      case actionType.GET_EVENTS_FAIL:
         return { error: action.payload }
      default:
         return state
   }
}

export const getEventDetailsReducer = (state = { event: {} }, action) => {
   switch (action.type) {
      case actionType.GET_EVENTS_DETAILS_REQUEST:
         return { loading: true }

      case actionType.GET_EVENTS_DETAILS_SUCCESS:
         return { loading: false, event: action.payload }

      case actionType.GET_EVENTS_DETAILS_FAIL:
         return { loading: false, error: action.payload }

      case actionType.GET_EVENTS_DETAILS_RESET:
         return { event: {} }

      default:
         return state
   }
}