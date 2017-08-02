import React from 'react';
import Footer from  './footer.component';
import AddTodo from  './add-todo.component';
import TodoList from  './todo-list.component';
import { getVisibilityTodos } from './todo.reducer'

class App extends React.Component {
	/* Before separete presentation components
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {value: ''};
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}


	handleSubmit(event) {
		this.props.addTodo(this.state.value);
		event.preventDefault();
		this.setState({value: ''});
	}
	*/

	/* before add filter
	render() {
		return (
			<div>
				<input value= {this.state.value} onChange={this.handleChange} />
				<button onClick= {this.handleSubmit}>Add Todo</button>
				<ul>{
						this.props.state.todos.map( (t) => (
															<li key={t.id} 
															    onClick={() => this.props.toogleTodo(t.id)}
															    style={{textDecoration: t.completed ? 'line-through' : 'none'}}
															>
															{t.text}
															</li>
														   )
												  )
					}
				</ul>
				<p>
					Show:
					{' '}<FilterBtn handleOnClick={() => this.props.setFilter('SHOW_ALL')}>All</FilterBtn>
					{' '}<FilterBtn handleOnClick={() => this.props.setFilter('SHOW_ACTIVE')}>Active</FilterBtn>
					{' '}<FilterBtn handleOnClick={() => this.props.setFilter('SHOW_COMPLITED')}>Completed</FilterBtn>
				</p>
			</div>
		)
	}
	*/

	/* Before separete presentation components
	render() {
		//const visibleTodos = getVisibilityTodos(this.props.state.todos, this.props.state.visibilityFilter);
		const {
			   todos, 
			   visibilityFilter
			  } = this.props.state;
			  
		const visibleTodos = getVisibilityTodos(todos, visibilityFilter);
		return (
			<div>
				<input value= {this.state.value} onChange={this.handleChange} />
				<button onClick= {this.handleSubmit}>Add Todo</button>
				<ul>{
						visibleTodos.map( (t) => (
															<li key={t.id} 
															    onClick={() => this.props.toogleTodo(t.id)}
															    style={{textDecoration: t.completed ? 'line-through' : 'none'}}
															>
															{t.text}
															</li>
														   )
												  )
					}
				</ul>
				<p>
					Show:
					{' '}<FilterBtn handleOnClick={this.props.setFilter} filter='SHOW_ALL' visibilityFilter={visibilityFilter}>All</FilterBtn>
					{' '}<FilterBtn handleOnClick={this.props.setFilter} filter='SHOW_ACTIVE' visibilityFilter={visibilityFilter}>Active</FilterBtn>
					{' '}<FilterBtn handleOnClick={this.props.setFilter} filter='SHOW_COMPLITED' visibilityFilter={visibilityFilter}>Completed</FilterBtn>
				</p>
			</div>
		)
	}
	*/

	render() {
		return (
			<div>
				<AddTodo addTodo={this.props.addTodo} />
				<TodoList todos={ getVisibilityTodos(this.props.state.todos, 
					                                 this.props.state.visibilityFilter
					                                )} 
				          toogleTodo={this.props.toogleTodo} />
				<Footer setFilter={this.props.setFilter} visibilityFilter={this.props.state.visibilityFilter} />
			</div>
		)
	}
}

 export default App;