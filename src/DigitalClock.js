import React from 'react'

class DigitalClock extends React.Component
{
    constructor()
    {
        super()
        this.state={
            currenttime: new Date().toLocaleString()
        }
        this.updateTime()
    }
    updateTime()
    {
        setInterval(()=>{
            this.setState({
                currenttime: new Date().toLocaleString()
            })
        })
    }
    render()
    {
        return(
            <div className="container">
                <h2 className="text-center">
                    {this.state.currenttime}
                </h2>
            </div>
        )
    }
}
export default DigitalClock;
