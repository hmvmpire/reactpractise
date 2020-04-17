const iState = {
    name :"Imtiaz",
    wishes:[
        'eat',
        'code'
    ]
};
const reducer = (state=iState, action) =>{
    if(action.type==='CHANGE_NAME_ASYNC')
    {
        return {
            ...state,
            name:action.payload
        }
    }
 return state;
}

export default reducer;