import React from 'react';
import {Provider} from 'react-redux'
import BookContainer from './Container/BookContainer'
import store from './Redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BookContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
