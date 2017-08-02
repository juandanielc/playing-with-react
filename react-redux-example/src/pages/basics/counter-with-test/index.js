import React from 'react';
import Counter from './counter.component';

// reducer
import counterReducer, {onIncrement, onDecrement} from './counter.reducer';

//const { createStore } = Redux;
//var createStore = Redux.createStore;
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const store = createStore(counterReducer);

console.log( store.getState() );
store.dispatch({type: 'INCREMENT'});
console.log( store.getState() );
store.dispatch({type: 'INCREMENT'});
console.log( store.getState() );


/**
 * Just for reference how works but not works with react because is rewritting the body  
 *
const render = () => {
	document.body.innerText = store.getState();
}

store.subscribe(render);
render(); //to display first time.

document.addEventListener('click', () => {
	store.dispatch({type: 'INCREMENT'});
});
*/

export default () => (
	<Provider store={store}>
		<div>
			<div className="info">
				Check the src in <code>src/pages/basics/counter-with-test/</code> 
				and run <code>npm run test</code> to see the test
			</div>
			<div className="info">
				Check the console to see the first two incrementations.
			</div>
			<div className="info">
				To see a clean redux check cwt.js
			</div>
			<div className="info">
				Check the file array-mutations.tets.js to see how is posible to avoiding array mutations with concat slice and spread
			</div>
			<hr />
			<Counter onIncrement={()=>onIncrement(store)} onDecrement={()=>onDecrement(store)} />
		</div>
	</Provider>
)

