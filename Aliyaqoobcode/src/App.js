import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import Home from "./component/Home";
import EmployeeCreate from "./component/EmployeeCreate";
import EmployeeList from "./component/EmployeeList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
      return (
            <div className="App">

                  <Router>

                        <Navbar bg="light" expand="lg">
                              <Navbar.Brand href="#home">Employee Data</Navbar.Brand>
                              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                              <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                          <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                                          <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
                                          <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>

                                    </Nav>

                              </Navbar.Collapse>
                        </Navbar>
                        <Route path="/list">
                              <EmployeeList />
                        </Route>
                        <Route path="/create">
                              <EmployeeCreate />
                        </Route>

                        <Route exact path="/">
                              <Home />
                        </Route>

                  </Router>

            </div>
      );
}

export default App;
