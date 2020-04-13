import React from 'react'

class Employees extends React.Component
{
    constructor()
    {
        super()
        this.state={
            employee:null
        }
    }
    componentDidMount()
    {
        fetch('http://dummy.restapiexample.com/api/v1/employees').then((response)=>{
            response.json().then(result=>{
                // console.warn(response);
                this.setState({employee:result.data})
            })
        })
    }
    render()
    {
        return(
            <div class="container">
                <h1 class="text-center">All Employees Data</h1>
                <br/>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">employee name</th>
                        <th scope="col">employee salary</th>
                        <th scope="col">age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employee ?
                            this.state.employee.map((employees,e)=>
                                <tr>
                                <th scope="row">{e}</th>
                                <td>{employees.employee_name}</td>
                                <td>$ {employees.employee_salary}</td>
                                <td>{employees.employee_age}</td>
                                <td><button class="btn btn-primary">Edit</button></td>
                                <td><button class="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                            :
                            null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Employees;