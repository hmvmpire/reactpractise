import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
class Employeelist extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/posts").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Employee list</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Employee Name</th>
                                        <th>Employee Salary</th>
                                        <th>Employee Age</th>
                                        <th>Profile Image</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        this.state.list.map((item, i) =>


                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.employee_name}</td>
                                                <td>{item.employee_salary}</td>
                                                <td>{item.employee_age}</td>
                                                <td>{item.employee_image}</td>


                                            </tr>
                                        )

                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>please wait....</p>

                }

            </div>



        );
    }
}

export default Employeelist;