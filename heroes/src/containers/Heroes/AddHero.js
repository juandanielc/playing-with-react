import React from 'react';

import {connect} from 'react-redux';
import {addHero} from '../../actions';

import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap';

class AddHero extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {value: ''};
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	isValid() {
		const length = this.state.value.length;
		return ( length > 4 && length < 15 );
	}

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.value.trim !== '') {
			this.props.dispatch(addHero({name: this.state.value}));  //injected when AddHero = connect()(AddTodo);
			this.setState({value: ''});
		}
	}

	render() {
		return (
		<Form inline>
	        <FormGroup
	          controlId="formBasicText"
	        >
				<ControlLabel>Name:</ControlLabel>
				{' '}
				<FormControl
				type="text"
				value={this.state.value}
				placeholder="Enter name"
				onChange={this.handleChange}
				/>
				<FormControl.Feedback />
	        </FormGroup>
	        {' '}
	        <Button onClick={this.handleSubmit} disabled={!this.isValid()}>Add</Button>
	    </Form>
			)
	}
}

export default connect()(AddHero);  //inject dispatch function into the class