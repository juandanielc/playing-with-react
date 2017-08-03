import React from 'react';
import "./index.css"

const HtmlPure = () => (
		<form>
		  <label>
		    Name:<br />
		    <input type="text" name="name" />
		  </label><br />
		  <label>
		  	Fruit <strong>(When this is used directly, an warning is generated. See the console)</strong><br />
			<select name="fruit">
			  <option value="grapefruit">Grapefruit</option>
			  <option value="lime">Lime</option>
			  <option selected value="coconut">Coconut</option>
			  <option value="mango">Mango</option>
			</select>
		  </label>
		  <input type="submit" value="Submit" />
		</form>
	);

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', valueUpper: '' , forceUpperCase: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, valueUpper: event.target.value.toUpperCase()});
    console.log('State: ' + this.state.value + " / Target: " + event.target.value);
  }

  handleSubmit(event) {
    alert( 'A name was submitted: ' + (this.state.forceUpperCase ? this.state.valueUpper : this.state.value) );
    event.preventDefault();
  }

  handleClick(event) {
    this.setState(prevState => ({
      forceUpperCase: !prevState.forceUpperCase
    }));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.forceUpperCase ? this.state.valueUpper : this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" /> <button onClick={this.handleToggle}>{this.state.forceUpperCase ? 'Uppercase' : 'Normal'}</button>
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

const FormsContainer = () => (
	<div>
    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>Value property</th>
          <th>Change callback</th>
          <th>New value in the callback</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>&lt;input type="text" /&gt;</code></td>
          <td><code>value="string"</code></td>
          <td><code>onChange</code></td>
          <td><code>event.target.value</code></td>
        </tr>
        <tr>
          <td><code>&lt;input type="checkbox" /&gt;</code></td>
          <td><code>checked={'{boolean}'}</code></td>
          <td><code>onChange</code></td>
          <td><code>event.target.checked</code></td>
        </tr>
        <tr>
          <td><code>&lt;input type="radio" /&gt;</code></td>
          <td><code>checked={'{boolean}'}</code></td>
          <td><code>onChange</code></td>
          <td><code>event.target.checked</code></td>
        </tr>
        <tr>
          <td><code>&lt;textarea /&gt;</code></td>
          <td><code>value="string"</code></td>
          <td><code>onChange</code></td>
          <td><code>event.target.value</code></td>
        </tr>
        <tr>
          <td><code>&lt;select /&gt;</code></td>
          <td><code>value="option value"</code></td>
          <td><code>onChange</code></td>
          <td><code>event.target.value</code></td>
        </tr>
      </tbody>
    </table>
    {'Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.'}
    <hr />
		Form No controlled.
		<HtmlPure />
		<hr />
		Form controlled.
		<NameForm />
		<hr />
		Essay Form controlled (text area).
		<EssayForm />
		<hr />
		Flavor Form controlled (select).
		<FlavorForm />
		Handling Multiple Inputs
		<Reservation />
	</div>
	)

export default FormsContainer