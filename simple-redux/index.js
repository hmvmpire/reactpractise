const redux = require('redux')
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware;

// define action type
const BUY_BOOK="BUY_BOOK";
const BUY_PEN="BUY_PEN";
const buy_Magzine = "buy_Magzine";

const initialStateBooks={
    
    numberOfBooks:10
}
const initialStatePens={

    numberOfPens:15
}
const initialStateMagzine={

    numberOfMagzines:30
}
// built function for action
function buyBook(){
    return{
        type: BUY_BOOK,
        payload: "This is my first action"
    }
}

// built another function for action
function buyPen(){
    return{
        type: BUY_PEN,
        payload: "This is my second action"
    }
}

// built another function for action
function buyMagzine(){
    return{
        type: buy_Magzine,
        payload: "This is my 3rd action"
    }
}

//this is reduction function
// first parameter is prev state and the next perameter is action that = new state
// we use arrow function for this
const BookReducer=(state=initialStateBooks,action)=>{
    switch(action.type){
        case 'BUY_BOOK':return{
                // we will clone the state
                ...state,
                // in case condition we will define our statement and prev state and update state condition
                numberOfBooks:state.numberOfBooks - 1
        }
        default: return state;
    }  
}

const MagzineReducer=(state=initialStateMagzine,action)=>{
    switch(action.type){
        case 'buy_Magzine':return{
                // we will clone the state
                ...state,
                // in case condition we will define our statement and prev state and update state condition
                numberOfMagzines:state.numberOfMagzines - 5
        }
        default: return state;
    }  
}

const PenReducer=(state=initialStatePens,action)=>{
    switch(action.type){
        case 'BUY_PEN':return{
                // we will clone the state
                ...state,
                // in case condition we will define our statement and prev state and update state condition
                numberOfPens:state.numberOfPens - 3
        }
        default: return state;
    }  
}

// create combine reducer
const reducer=combineReducers({
    book:BookReducer,
    pen:PenReducer,
    magzine:MagzineReducer
})

const logger=store=>{
    return next=>{
        return action=>{
            const result=next(action);
            console.log("middleware logged",result);

            return result;
        }
    }
}

// we call reducer in createStore
const store=createStore(reducer,applyMiddleware(logger));
console.log("initial state value ",store.getState());
// after calling reducer we will update state value so we subscribe the store value 
const unsubscribe = store.subscribe(()=>{console.log('updated state value', store.getState())});
// for update state value we will dispatch store method and call action function in dispatch
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyMagzine());
store.dispatch(buyMagzine());
store.dispatch(buyMagzine());
// after this we will call unsubscribe const variable
unsubscribe();
