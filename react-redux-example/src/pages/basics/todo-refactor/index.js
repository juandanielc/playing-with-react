import React from 'react';
import store from './todo.reducer.js';
import {Provider} from 'react-redux';
import TodoApp from './todo-app.component';

export default (props) => (
	<Provider store={store}>
		<TodoApp />
	</Provider>
)