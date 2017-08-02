import React, { Component } from 'react';
import AddGreeter from './AddGreeter';

import './HelloWorld.css';

export class HelloWorld extends Component {
	constructor(props) {
	  super(props);
	  this.state = { greeting: 'Hello' };
	  this.frenchify = this.frenchify.bind(this);
	  this.removeGreeting = this.removeGreeting.bind(this);
	}

	frenchify() {
	  this.setState({ greeting: 'Bonjour' });
	}

	removeGreeting() {
		this.props.removeGreeting(this.props.name);
	}

	render() {
	  return (
	    <div className="HelloWorld">
	      {this.state.greeting} {this.props.name}!
	      <br/>
	      <button className='frenchify' onClick={this.frenchify}>Frenchify!</button>
	      <br />
	      <button className='remove' onClick={this.removeGreeting}>Remove Greeting</button>
	    </div>
	  );
	}
}

class HelloWorldList extends Component {

	constructor(props) {
	  super(props);
	  this.state = { greetings: ['Jim', 'Sally', 'juan'] };
	  this.addGreeting = this.addGreeting.bind(this);
	  this.removeGreeting = this.removeGreeting.bind(this);
	}

	renderGreetings() {
	  return this.state.greetings.map(name => (
	    <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting}/>
	  ));
	}

	addGreeting(newName) {
	  	this.setState({ greetings: [...this.state.greetings, newName] });
	}

	removeGreeting(removeName) {
	  const filteredGreetings = this.state.greetings.filter(name => {
	    return name !== removeName;
	  });
	  this.setState({ greetings: filteredGreetings });
	}

	render() {
		return (
		  <div className="HelloWorldList">
		  	<p><strong>Check the tests into the folder src/pages/basics/hello-world</strong></p>
		    <AddGreeter addGreeting={this.addGreeting}/>
		  	{this.renderGreetings()}
		  </div>
		);
	}
}

export default HelloWorldList;