import React from 'react';

import {connect} from 'react-redux';
import { goBack } from 'react-router-redux';	

import {updateHero, getHero} from '../../actions';

import { FormGroup, ControlLabel, FormControl, Button, Form, HelpBlock } from 'react-bootstrap';

class EditHero extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		if(typeof props.hero !== 'undefined') {
			this.state = {value: props.hero.name};
		}
	}

	componentWillMount() {
		if(typeof this.props.hero === 'undefined') {
			this.props.history.push("/");
		} 
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
			this.props.updateHero({name: this.state.value, id:this.props.hero.id});  //injected when AddHero = connect()(AddTodo);
			this.props.goBack();
		}
	}

	render() {
		
		return (typeof this.props.hero === 'undefined') ? (<div></div>) : (

		<Form>
			<h2>{this.props.hero.name} details!</h2>
	        <FormGroup
	          controlId="formBasicText"
	        >
				<ControlLabel>ID</ControlLabel>
				<FormControl
				type="text"
				value={this.props.hero.id}
				disabled
				/>
	        </FormGroup>
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
				<HelpBlock>Name between 4 and 12 characters</HelpBlock>
				<FormControl.Feedback />
	        </FormGroup>
	        
	        <Button onClick={() => this.props.goBack()}>Cancel</Button>
	        {' '}
	        <Button bsStyle="primary" onClick={this.handleSubmit} disabled={!this.isValid()}>Update</Button>
	    </Form>
			)
	}
}

const mapStateToProps = function (state) {
	const hero = getHero(state.heroes, state.selected);
	return {hero: hero};
}

const mapDispatchToProps = function (dispatch) {
	return { updateHero: hero=>dispatch(updateHero(hero)), goBack: ()=>dispatch(goBack())};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHero);  //inject dispatch function into the class