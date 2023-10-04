import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getEventsReducer, getEventDetailsReducer } from './reducers/eventReduces';

const reducer = combineReducers({
   getEvents: getEventsReducer,
   getEventDetails: getEventDetailsReducer
});

const middleware = [thunk];

const store = createStore(
   reducer,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;