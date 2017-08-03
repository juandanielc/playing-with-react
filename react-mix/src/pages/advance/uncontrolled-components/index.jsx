import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name (with alert by reference):
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


class NameForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            defaultValue="Bob"
            type="text"
            ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


const UncontrolledComponents = () => (
  <div>
    <NameForm />
    <hr />
    <NameForm2 />
    <hr />
    <a href="https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/" target="_blank" rel="noopener noreferrer">controlled versus uncontrolled inputs</a>
  </div>
  )

export default UncontrolledComponents;