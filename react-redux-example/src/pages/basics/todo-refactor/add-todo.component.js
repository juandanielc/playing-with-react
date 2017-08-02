import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from './todo.actions';

class AddTodo extends React.Component {
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
		event.preventDefault();
		if(this.state.value.trim !== '') {
			this.props.dispatch(addTodo({text: this.state.value}));  //injected when AddTodo = connect()(AddTodo);
			this.setState({value: ''});
		}
	}

	render() {
		return (
			<div>
				<input value= {this.state.value} onChange={this.handleChange} />
				<button onClick= {this.handleSubmit}>Add Todo</button>
			</div>
			)
	}
}

export default connect()(AddTodo);  //inject dispatch function into the class