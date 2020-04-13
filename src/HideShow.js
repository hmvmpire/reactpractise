import React, {Component} from 'react'

class HideShow extends Component
{
    constructor()
    {
        super()
        this.state={
            show:true
            
        } 
    }
    render()
    {
        return(
            <div>
                {
                    this.state.show ?
                    <h1>Hide and Show </h1>
                    :
                    null
                }
                
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Click Me</button>
            </div>
        )
    }
}
export default HideShow;
