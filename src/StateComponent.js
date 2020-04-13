import React, {Component} from 'react'

export default class StateComponent extends Component
{
    constructor(props)
    {
        super()
        this.state={
            name: 'Ammad Amjad',
            email: 'ammadamajd60@gmail.com',
            count: 0
        }
    }
    updateState()
        {
            this.setState({
                name: 'Hassan Amjad',
                email: 'hassan@gmail.com',
                count: this.state.count+1
            })
        }
    render()
    {
        return(
            <div>
                <h3>{this.state.name}</h3>
                <h3>{this.state.email}</h3>
                <h3>{this.state.count}</h3>
                <button onClick={()=>{this.updateState()}}>Update State</button>
            </div>
        )
    }
}
