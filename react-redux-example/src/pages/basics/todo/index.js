import React from 'react';
import store, {addTodo, toogleTodo, setFilter} from './todo.reducer.js';
import {Provider, connect} from 'react-redux';
import TodoApp from './todo-app.component';

const mapStateToProps = function (state) {
  return {state};
}

// wrap the component for the Provider
const App = connect(mapStateToProps)(TodoApp);

export default (props) => (
	<Provider store={store}>
		<div>
			<div className="info">
				Check the src in <code>src/pages/basics/todo</code> 
				and run <code>npm run test</code> to see the test
			</div>
			<div className="info">
				Check the console to see the combine reducers.
			</div>
			<hr />
			<App addTodo={ (text) => addTodo({text: text}) }
				 toogleTodo={ (id) => toogleTodo( id ) }
				 setFilter={ (filter) => setFilter( filter ) }
			/>
		</div>
	</Provider>
)