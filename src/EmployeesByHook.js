import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeesByHook()
{
    const [employeesget,setEmployees]=useState({ data: [] })

    useEffect(()=>{
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(res=>{
            console.log(res)
            setEmployees(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }, []);
    return (
        <div className="container">
                <h1 className="text-center">All Employees Data</h1>
                <br/>
                <table className="table">
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
                            employeesget.data.map(employee =>
                                <tr>
                                <th scope="row">{employee.id}</th>
                                <td>{employee.employee_name}</td>
                                <td>$ {employee.employee_salary}</td>
                                <td>{employee.employee_age}</td>
                                <td><button className="btn btn-primary">Edit</button></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
            </div>
    )
}
export default EmployeesByHook;