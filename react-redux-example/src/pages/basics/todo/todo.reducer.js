import { createStore } from 'redux';
import { combineReducers } from 'redux';
/*
before composition

export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
		return [ 
		  ...state, 
		  {
			  id: action.id,
			  text: action.text,
			  completed: false
		  }
		];

		case 'TOGGLE_TODO':
		return state.map((todo) => {
			if(todo.id !== action.id) return todo;
			return {...todo, completed: !todo.completed }
		})


		default: 
			return state;
	}
};

 */


// composition array (only 1 task) create and add are 2 different tasks.
const todo  = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TODO':
		return {
			  id: action.id,
			  text: action.text,
			  completed: false
		  };

		case 'TOGGLE_TODO':
		return (state.id !== action.id) ? state : {...state, completed: !state.completed };


		default: 
			return state;
	}
};

export const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
		return [ ...state, todo( {}, action ) ];

		case 'TOGGLE_TODO':
		return state.map((t) => todo(t, action));


		default: 
			return state;
	}
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Composition object
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const visibilityFilter = ( state = 'SHOW_ALL', action ) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER': return action.filter;

		default: return state;
	}
};


/**
 * combine reducers
 */

// if the names are the same like this
/*
const todoApp = combineReducers({
	todos: todos,
	visibilityFilter: visibilityFilter
});
*/
// you can use
const todoApp = combineReducers({
	todos,
	visibilityFilter
});

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Explanation of combine Reducers
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const todoApp = ( state = {}, action ) => {
	return  {
		todos: todos(state.todos, action),
		visibilityFilter: visibilityFilter(state.visibilityFilter, action)
	};
};
*/

// to see the composition into the console
const store1 = createStore(todos);
console.log('state todos', store1.getState());
store1.dispatch({type: 'ADD_TODO',
				 text: 'Learn redux',
				 id: 0});
console.log('state todos', store1.getState());

const store2 = createStore(todoApp);
console.log('state todoApp', store2.getState());
store2.dispatch({type: 'ADD_TODO',
				 text: 'Learn redux',
				 id: 0});
console.log('state todos', store2.getState());

store2.dispatch({type: 'SET_VISIBILITY_FILTER',
				 filter: 'SHOW_COMPLITED'});

console.log('state todos', store2.getState());

const store = createStore(todoApp);
let id = 0;

export const addTodo = (value) => {
	store.dispatch({type: 'ADD_TODO', text: value.text, id: id ++ });
}

export const toogleTodo = (id) => {
	store.dispatch({type: 'TOGGLE_TODO', id: id});
}

export const setFilter = (filter) => {
	store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: filter});
}

export const getVisibilityTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL': return todos;
		case 'SHOW_ACTIVE': return todos.filter( t => !t.completed );
		case 'SHOW_COMPLITED': return todos.filter( t => t.completed );
		default: return todos;
	}
}

export default store;
