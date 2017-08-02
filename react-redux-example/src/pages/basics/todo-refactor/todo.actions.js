let id = 0;

export const addTodo = (value) => ({type: 'ADD_TODO', text: value.text, id: id ++ });

export const toogleTodo = (id) => ({type: 'TOGGLE_TODO', id: id});

export const setFilter = (filter) => ({type: 'SET_VISIBILITY_FILTER', filter: filter});

export const getVisibilityTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL': return todos;
		case 'SHOW_ACTIVE': return todos.filter( t => !t.completed );
		case 'SHOW_COMPLITED': return todos.filter( t => t.completed );
		default: return todos;
	}
}