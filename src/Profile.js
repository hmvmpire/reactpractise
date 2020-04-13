import React from 'react'

class Profile extends React.Component{

    constructor(props)
    {
        super()
    }
    componentDidMount()
    {
        console.warn("Life Cycle called");
    }
    render()
    {
        return(
            <div>Hello Profile Component</div>
        )
    }
}

export default Profile;