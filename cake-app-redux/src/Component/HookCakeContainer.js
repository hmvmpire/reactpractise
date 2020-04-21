import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HookCakeContainer()
{
    // use selector as well as mapstatetoprops
   const numberOfCakes = useSelector(state=>state.cake.numberOfCakes)
   const disPatch = useDispatch()
    return(
        <div>
            <h1>Hooks with redux</h1>
            <h1>Number of cakes - {numberOfCakes}</h1>
            <button onClick={()=>disPatch(buyCake())}>Buy Cake by hooks</button>
        </div>
    )
}

export default HookCakeContainer;
