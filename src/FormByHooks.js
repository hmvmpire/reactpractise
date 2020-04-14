import React, { useState, useEffect } from 'react';

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
                <Form addEmployee={addEmployee}></Form>
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
export default Form;