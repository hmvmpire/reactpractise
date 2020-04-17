import React, {useState} from 'react'

function Hooks()
{
    const [count,setCount]=useState(100);

    return (
        <div>
            <h1>Hooks Count Value {count}</h1>
            <button onClick={()=>setCount(count+1)}>Click for add one number</button>
        </div>
    )
}
export default Hooks;