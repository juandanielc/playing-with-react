import React from 'react';
import { createStore } from 'redux';
import {Provider, connect} from 'react-redux';
import Counter from './counter.component';

// reducer
import counterReducer, {onIncrement, onDecrement} from './counter.reducer';

 //create store
const store = createStore(counterReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter onIncrement={()=>onIncrement(store)} onDecrement={()=>onDecrement(store)} />
      </Provider>
    )
  }
} 

export default App;