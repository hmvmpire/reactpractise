import { BUY_BOOK } from "./bookType"

const initialState={
    numberOFBooks:10
}

const bookReducer=(state=initialState, action)=>{
    switch(action.type){
        case BUY_BOOK:return{
            ...state,
            numberOFBooks:state.numberOFBooks-1
        }

        default:return state;
    }
}

export default bookReducer;