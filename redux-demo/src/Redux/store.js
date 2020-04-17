import {createStore} from 'redux'
import bookReducer from './Book/bookReducer'

const store=createStore(bookReducer);

export default store;