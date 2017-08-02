import React from 'react';
import {connect} from 'react-redux';
import Footer from  './footer.component';
import AddTodo from  './add-todo.component';
import TodoList from  './todo-list.component';
import { getVisibilityTodos, toogleTodo } from './todo.actions';

/*this container component and the store (because is passing by context) will be replace by mapStateToProps 
class VisibleTodoList extends React.Component {
	componentDidMount() {
		this.unsubscribe = store.subscribe( () => this.forceUpdate() );
	}

	componentWillUnmount() {
		this.unsubscribe();
	}
 	render() {
		const {todos, visibilityFilter} = store.getState();
 		return (
 			<TodoList todos={getVisibilityTodos(todos, visibilityFilter)} 
 			          onTodoClick={id=>store.dispatch(id)}/>
 		)
 	}
}
*/

const mapStateToProps = function (state) {
  return {todos: getVisibilityTodos(state.todos, state.visibilityFilter)};
}

const mapDispatchToProps = function (dispatch) {
	return { onTodoClick: id=>dispatch(toogleTodo(id)) }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default () => (
		<div>
			<AddTodo />
			<VisibleTodoList  />
			<Footer />
		</div>
		)