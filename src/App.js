import React from 'react';
import Form from './Form'
import HomeRoute from './HomeRoute'
import AboutRoute from './AboutRoute'
import Employees from './Employees'
import EmployeesByHook from './EmployeesByHook'
// import FormByHooks from './FormByHooks'
import DigitalClock from './DigitalClock'

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-8">
              <div className="container">
                <br/>
                  <DigitalClock/>
                  <br/>
                </div>
              <Router>
                <div className="row">
                    <div className="col-lg-2"><Link to="/">Home </Link></div>
                    <div className="col-lg-2"><Link to="/about">About </Link></div>
                    <div className="col-lg-2"><Link to="/form">Form </Link></div>
                    <div className="col-lg-2"><Link to="/employees">Employees </Link></div>
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
