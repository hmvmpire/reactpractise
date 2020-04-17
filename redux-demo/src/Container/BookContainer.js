import React from 'react'
import {connect} from 'react-redux'
import {buyBook} from '../Redux'
function BookContainer(props)
{
    return(
        <div>
            <h1>Number of books - {props.numberOfBooks}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
        </div>
    )
}

const mapStatetoProps=(state)=>{
    return {
        numberOfBooks:state.numberOfBooks
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBook:function(){
            dispatch(buyBook());
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);