var deepFreeze = require('deep-freeze');

const toggleTodo = (todo) => {
	todo.completed = !todo.completed;
	return todo;
}

const toggleTodoES5 = (todo) => {
	let newTodo = JSON.parse(JSON.stringify(todo));
	newTodo.completed = !newTodo.completed;
	return newTodo;
}

/* This method is new in ES6 */
const toggleTodoES6 = (todo) => {
	return Object.assign({}, todo, { completed: !todo.complited });
}

/* This method is propouse in ES7 babel has this*/
const toggleTodoES7 = (todo) => {
	return {...todo, completed: !todo.complited };
}

it('Test Mutation toggleTodo', () => {
	{
		const todoBefore = {
			id: 1,
			text: 'Learn redux',
			completed: false
		};
		const todoAfter = {
			id: 1,
			text: 'Learn redux',
			completed: true
		};
		// deepFreeze(todoBefore); with this line this example fails because deepFreeze prevent mutations.

		expect(
			toggleTodo(todoBefore)
		).toEqual(todoAfter);
	}

	{
		const todoBefore = {
			id: 1,
			text: 'Learn redux',
			completed: false
		};
		const todoAfter = {
			id: 1,
			text: 'Learn redux',
			completed: true
		};

		deepFreeze(todoBefore);

		expect(
			toggleTodoES5(todoBefore)
		).toEqual(todoAfter);
	}

	{
		const todoBefore = {
			id: 1,
			text: 'Learn redux',
			completed: false
		};
		const todoAfter = {
			id: 1,
			text: 'Learn redux',
			completed: true
		};

		deepFreeze(todoBefore);

		expect(
			toggleTodoES6(todoBefore)
		).toEqual(todoAfter);
	}

	{
		const todoBefore = {
			id: 1,
			text: 'Learn redux',
			completed: false
		};
		const todoAfter = {
			id: 1,
			text: 'Learn redux',
			completed: true
		};

		deepFreeze(todoBefore);

		expect(
			toggleTodoES7(todoBefore)
		).toEqual(todoAfter);
	}
});