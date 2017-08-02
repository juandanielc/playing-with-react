import {todos} from './todo.reducer.js'
var deepFreeze = require('deep-freeze');

//it('Test todos reducer', () => {
	it('Add', () => {
		{
			const stateBefore = [];

			const action = {
				type: 'ADD_TODO',
				text: 'Learn redux',
				id: 0
			};

			const stateAfter = [{
				id: 0,
				text: 'Learn redux',
				completed: false
			}];
			
			deepFreeze(stateBefore);
			deepFreeze(action);

			expect(
				todos(stateBefore, action)
			).toEqual(stateAfter);
		}
	});

	it('Toogle', () => {

		{
			const stateBefore = 
			[
			{
				id: 5,
				text: 'Learn redux part 1',
				completed: false
			},
			{
				id: 10,
				text: 'Learn redux part 2',
				completed: false
			}
			];

			const action = {
				type: 'TOGGLE_TODO',
				id: 10
			};

			const stateAfter =
			[
			{
				id: 5,
				text: 'Learn redux part 1',
				completed: false
			},
			{
				id: 10,
				text: 'Learn redux part 2',
				completed: true
			}
			];

			deepFreeze(stateBefore);
			deepFreeze(action);

			expect(
				todos(stateBefore, action)
			).toEqual(stateAfter);
		}
	});
//});