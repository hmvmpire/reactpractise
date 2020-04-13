import React, { Component } from 'react';

class EmployeeCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            salary: null,
            age: null,
            image: null,
        }
    }
    create() {
        fetch("http://localhost:3000/posts", {
            method: "post",
            headers: {
                'Content-Type': 'JSON'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Employee Has Been Added")
            })
        })

    }

    render() {
        return (
            <div>
                <h1>Employee Create</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Employee Name" /><br /><br />
                    <input onChange={(event) => { this.setState({ salary: event.target.value }) }}
                        placeholder="Employee Salary" /><br /><br />
                    <input onChange={(event) => { this.setState({ age: event.target.value }) }}
                        placeholder="Employee Age" /><br /><br />
                    <input onChange={(event) => { this.setState({ image: event.target.value }) }}
                        placeholder="Employee image" /><br /><br />
                    <button onClick={() => { this.create() }}>Add Employee</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCreate;