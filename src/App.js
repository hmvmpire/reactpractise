import React from 'react';
import Form from './Form'
import HomeRoute from './HomeRoute'
import AboutRoute from './AboutRoute'
import Employees from './Employees'
import EmployeesByHook from './EmployeesByHook'
import FormByHooks from './FormByHooks'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div class="container">
            <br/>
            <div class="row">
              <div class="col-lg-1"></div>
              <div class="col-lg-8">
              <Router>
                <div class="row">
                    <div class="col-lg-2"><Link to="/">Home </Link></div>
                    <div class="col-lg-2"><Link to="/about">About </Link></div>
                    <div class="col-lg-2"><Link to="/form">Form </Link></div>
                    <div class="col-lg-3"><Link to="/employees">Employees </Link></div>
                    <div className="col-lg-4"><Link to="/EmployeesByHook"> Get Employees by Hooks </Link></div>
                </div>
                <br/>
                <Route exact path="/" component={HomeRoute} />
                <Route path="/about" component={AboutRoute} />
                <Route path="/form" component={Form} />
                <Route path="/employees" component={Employees} />
                <Route path="/EmployeesByHook" component={EmployeesByHook} />
              </Router>
              </div>
              
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
