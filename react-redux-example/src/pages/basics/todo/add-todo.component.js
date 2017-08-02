import React from 'react';

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
		this.props.addTodo(this.state.value);
		this.setState({value: ''});
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

export default AddTodo;