import React from 'react'

class LifeCycleMethod extends React.Component
{
    constructor()
    {
        super()
        console.warn("consturctor");
    }
    componentDidMount()
    {
        console.warn("componentDidMount");
    }
    render()
    {
        console.warn("render");
        return(
            <div>This is Life Cycle</div>
        )
    }
}
export default LifeCycleMethod;