import $ from 'jquery';
import React from 'react';
import './index.css';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

class LoadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {html: "hola"};

    var self = this;
    $.get('/' + props.page + '.html', function(res){
     self.setState( {html: res} );
    });
  }

  render() {
    return (
      <div className="home-content" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
    )
  }
}

function App() {
  return (
    <SplitPane
      left={
        <LoadPage page='chat' />
      }
      right={
        <LoadPage page='contacts' />
      } />
  );
}

/**
 * Specialization
 */

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialogSpe() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

const AboutInheritance = () => (
    <Dialog
      title="So What About Inheritance?"
      message="At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it."
/>
	);

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

const CompVSInher = () => (
	<div>
		<WelcomeDialog />
		<h1>Containment</h1>
		<App />
		<div style={{clear: 'both'}}>&nbsp;</div>
		<hr />
		<h1>Specialization</h1>
		function:
		<WelcomeDialogSpe />
		<hr />
		Class: 
		<SignUpDialog />
		<hr />
		<AboutInheritance />
	</div>
	);

export default CompVSInher;




