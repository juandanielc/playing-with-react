//counter in ES5
/*export function counter(state, action) {
	if (typeof state === 'undefined' ) return 0;   //default parameter in ES6

	switch (action.type) {
		case 'INCREMENT': return state + 1;
		case 'DECREMENT': return state - 1;
		default : return state;
	}
}*/

//counter in ES6
/*export const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT': return state + 1;
		case 'DECREMENT': return state - 1;
		default: return state;
	}
}*/

//counter in ES6 as default
export default (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT': return state + 1;
		case 'DECREMENT': return state - 1;
		default: return state;
	}
}

export const onIncrement = store => {
	store.dispatch({type: 'INCREMENT'});
}

export const onDecrement = store => {
	store.dispatch({type: 'DECREMENT'});
}