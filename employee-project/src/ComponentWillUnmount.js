import React from 'react'

class ComponentWillUnmount extends React.Component
{
    constructor()
    {
        super()
        this.state={
            toggle:true,
        }
    }
    componentWillUnmount()
    {
        alert('User is deleted successfully');
    }
    render()
    {
        return(
            <div>
                <h1>User Data</h1>
                {
                    this.state.toggle?
                    <ul>
                        <li>Ammad Amjad</li>
                        <li>ammadamjad60@gmail.com</li>
                        <li>0321-4371030</li>
                    </ul>
                    :
                    null
                }
                
                <button onClick={()=>this.setState({toggle:!this.state.toggle})}>Delete user</button>
            </div>
        )
    }
}

export default ComponentWillUnmount;
