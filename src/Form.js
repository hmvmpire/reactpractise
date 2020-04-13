import React from 'react'

class Form extends React.Component
{
    constructor()
    {
        super()
        this.state={
            employee_name:"",
            employee_salary:"",
            employee_age:"",

        }
    }
    
    submit()
    {
        let url="http://dummy.restapiexample.com/api/v1/create"
        let data=this.state
        fetch(url,{
            method: 'POST',
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert('Employee data is submitted'); 
            })
        })
        
    }

    render()
    {
        return(
            <div>
                <div class="container">
                    <h2 class="text-center">Add an Employee</h2>
                    <input class="form-control" type="text" value={this.state.employee_name} name="employee_name" placeholder="Enter your name" onChange={(data)=>{this.setState({employee_name:data.target.value})}}/>
                    <p style={{color:"red"}}>{this.state.nameError}</p>
                
                    <input class="form-control" value={this.state.employee_salary} type="number" name="employee_salary" placeholder="Enter employee salary" onChange={(data)=>{this.setState({employee_salary:data.target.value})}}></input>
                    <p style={{color:"red"}}>{this.state.passwordError}</p>
                    <input class="form-control" value={this.state.employee_age} type="number" name="employee_age" placeholder="Enter employee age" onChange={(data)=>{this.setState({employee_age:data.target.value})}}></input>
                    <p style={{color:"red"}}>{this.state.passwordError}</p>
                    <button class="btn btn-success" onClick={()=>{this.submit()}}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Form;
