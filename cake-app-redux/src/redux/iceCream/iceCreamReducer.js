
import {BUY_ICECREAM} from './iceCreamTypes'

const initialState={
    numberOfIcecream : 20
}

const iceCreamReducer=(state=initialState,action)=>{

    switch(action.type){
        case BUY_ICECREAM: return{
            numberOfIcecream:state.numberOfIcecream-1
        }

        default: return state
    }
}
export default iceCreamReducer;