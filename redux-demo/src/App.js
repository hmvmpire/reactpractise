import React from 'react';
import {Provider} from 'react-redux'
// import component of bookContainer
import BookContainer from './Container/BookContainer'
import HookBookContainer from './Container/HookBookContainer'
// here we import store 
import store from './Redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BookContainer/>
      <HookBookContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
