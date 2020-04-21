import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';

import CakeContainer from './Component/CakeContainer';
import HookCakeContainer from './Component/HookCakeContainer';
import IceCreamContainer from './Component/IceCreamContainer';
import NewCakeContainer from './Component/NewCakeContainer';
import ItemContainer from './Component/ItemContainer';
import UserContainer from './Component/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        <ItemContainer cake/>
        <ItemContainer iceCream/>
        <HookCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
