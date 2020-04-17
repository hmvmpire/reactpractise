import React from 'react';
import './App.css';
import {connect} from 'react-redux'
function App(props) {
  console.log(props);
  return (
    <div className="App">
     <h1>React Redux</h1>
  <h1>My Name is {props.name}</h1>
  <button onClick={()=>{props.changeName("Imtiaz MAlik")}} >Change Name</button>
    </div>
  );
}
const myStateToProps = (state)=>{
  return{
      name : state.name
  }
}
const dispatchToProps =(dispatch)=>{
  return {
    changeName: (name) => {
      dispatch({type:'CHANGE_NAME',payload:name})
    }
  }
}
export default connect(myStateToProps,dispatchToProps)(App);
