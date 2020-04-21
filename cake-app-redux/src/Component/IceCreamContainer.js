import React from 'react'
import {buy_Icecream} from '../redux'
import {connect} from 'react-redux'

function IceCreamContainer(props)
{
    return(
        <div>
            <h1>Number of Icecream - {props.numberOfIcecream}</h1>
            <button onClick={props.buy_Icecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        numberOfIcecream: state.iceCream.numberOfIcecream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buy_Icecream: () => dispatch(buy_Icecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);
