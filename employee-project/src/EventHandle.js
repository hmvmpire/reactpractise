import React from 'react'

class EventHandle extends React.Component
{
    testFun()
    {
        alert("clicked");
    }
    render()
    {
        return(
            <div>
                <h1>Event Handling</h1>
                <button onClick={this.testFun}>click me</button>
            </div>
        )
    }
}
export default EventHandle;