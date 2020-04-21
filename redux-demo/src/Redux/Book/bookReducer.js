// import type of action
import { BUY_BOOK } from "./bookType"

// define initial state
const initialState={
    numberOFBooks:10
}

// create function for reducer
const bookReducer=(state=initialState, action)=>{
    switch(action.type){
        case BUY_BOOK:return{
            ...state,
            numberOFBooks:state.numberOFBooks-1
        }

        default:return state;
    }
}

// now export reducer
export default bookReducer;
