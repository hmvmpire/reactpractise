import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form({addEmployee}){
    const [name,setName] =  useState('');
    const [age,setAge] =  useState('');
    const [salary,setSalary] =  useState('');
  
    const handleSubmit = e =>{
    e.preventDefault();
    if(!name) return;
    addEmployee(name,age,salary);
    let url="http://dummy.restapiexample.com/api/v1/create"
    let data={'name':name,'age':age,'salary':salary}
    fetch(url,{
        method: 'POST',
        headers:{
            "Content-type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        result.json().then((resp)=>{
            alert('Employee data is submitted:' + JSON.stringify(resp)); 
        })
    })
      setName('');
      setAge('');
      setSalary('');
    };
  
    return(
            <div>
                <div className="container">
                    <h2 className="text-center">Add an Employee</h2>
                    <form onSubmit={handleSubmit}>
                    <input className="form-control" type="text" value={name}  placeholder="Enter your name" onChange = {e => setName(e.target.value)} />        
                    <input className="form-control" type="number" value={salary}   placeholder="Enter employee salary" onChange = {e => setSalary(e.target.value)} ></input>
                    <input className="form-control" type="number" value={age}   placeholder="Enter employee age" onChange = {e => setAge(e.target.value)} ></input>
                              
                    <button  className="btn margin-top btn-success" type="submit" >Add</button>
                    </form>
                </div>
            </div>
        )
  }

function Employees()
{
    const [employees, setEmployees] = useState({ data: [] });
    const [emp,setEmp] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://dummy.restapiexample.com/api/v1/employees',
          );
          setEmployees(result.data);
        };
        fetchData();
      }, []);

      const addEmployee = (name,age,salary) =>{
        const newEmployee = [...emp,{name,salary,age}];
        setEmp(newEmployee);
      };
    
        return(
            <div class="container">
                <Form addEmployee={addEmployee}></Form>
                <h1 class="text-center">All Employees Data</h1>
                <br/>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">employee name</th>
                        <th scope="col">employee salary</th>
                        <th scope="col">age</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.data ?
                            employees.data.map((employee,index)=>
                                <tr>
                                <th scope="row">{index}</th>
                                <td>{employee.employee_name}</td>
                                <td>$ {employee.employee_salary}</td>
                                <td>{employee.employee_age}</td>
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

export default Employees;