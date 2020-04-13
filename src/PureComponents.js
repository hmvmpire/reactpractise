import React, {Component} from 'react'

class PureComponents extends Component
{
    constructor()
    {
        super()
        this.state={
            user: 10
        }
    }
    render()
    {
        console.warn(this.state)
        return(
            <div>
                <h1>Pure Component {this.state.user}</h1>
                <button onClick={()=>this.setState({user:20})}>Update me</button>
            </div>
        )
    }
}
export default PureComponents;