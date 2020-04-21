// import createStore from redux library
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
// import reducer 
import bookReducer from './Book/bookReducer'
// now create const variable for store
const store=createStore(bookReducer,applyMiddleware(logger));

export default store;
