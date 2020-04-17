import React from 'react'

class ComponentDidMount extends React.Component
{
    constructor()
    {
        super()
        this.state={
            data:null
        }
        console.warn("constructor");
    }
    componentDidMount()
    {
        this.setState({data:"updated"})
        console.warn("componentdidmount");
    }
    render()
    {
        console.warn("render");
        return(
            <div></div>
        )
    }
}
export default ComponentDidMount;
