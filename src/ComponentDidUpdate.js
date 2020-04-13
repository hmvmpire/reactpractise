import React from 'react'

class ComponentDidUpdate extends React.Component
{
    constructor()
    {
        super()
        this.state={
            active:null,
            who:null,
        }
    }
    componentDidUpdate()
    {
        console.warn("componentdidupdate");
        if(this.state.who==null)
        {
            this.setState({who: "ammad amjad"})
        }
    }
    render()
    {
        return(
            <div>
                <h2>this is component did update {this.state.who}</h2>
                <button onClick={()=>this.setState({active:"update"})}>Update</button>
            </div>
        )
    }
}
export default ComponentDidUpdate;