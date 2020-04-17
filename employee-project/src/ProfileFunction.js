import React from 'react'

export default function ProfileFunction(props)
{
    const red=()=>{
        alert('Red is called');
    }
    return (
        <div>
            <h1 onClick={red}>{props.text.name}</h1>
            <h4>{props.data}</h4>
        </div>
        
    )
}
