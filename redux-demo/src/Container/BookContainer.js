import React from 'react'
import {connect} from 'react-redux';
import {buyBook} from '../Redux/index';

function BookContainer(props)
{
    return(
        <div>
            <h1>Number of books - {props.numberOfBooks}</h1>
            
            <button onClick={props.buyBook}>Buy Book</button>
        </div>
    )
}

// this is state props function to call initial state
const mapStatetoProps=(state)=>{
    return {
        numberOfBooks:state.numberOfBooks
    }
}

// this is dispatch function for calling action function
const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBook:function(){
            dispatch(buyBook())
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer)
