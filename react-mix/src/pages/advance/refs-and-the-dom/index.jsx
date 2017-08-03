import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
    this.buttonInput.value = "text is focus"
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
      	<input type="text" />
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          ref={(input) => { this.buttonInput = input; }}
          onClick={this.focus}
        />
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focus();
    //this.buttonInput.value = "text is focus at the begining."
  }

  render() {
    return (
      <CustomTextInput
        ref={(input) => { this.textInput = input; }} 
        // ref={(input) => { this.buttonInput = input; }}
        />
    );
  }
}

function CustomTextInputF(props) {
  // textInput must be declared here so the ref callback can refer to it
  let textInput = null;

  function handleClick() {
    textInput.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={(input) => { textInput = input; }} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );  
}

function CustomTextInputChild(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  componentDidMount() {
    this.inputElement.value = "text from the parent."
  }

  render() {
    return (
      <CustomTextInputChild
        inputRef={el => this.inputElement = el}
      />
    );
  }
}

function Parent2(props) {
  return (
    <div>
      My input: <CustomTextInputChild inputRef={props.inputRef} />
    </div>
  );
}


class Grandparent extends React.Component {
  componentDidMount() {
    this.inputElement.value = "text from the grantparent."
  }
  render() {
    return (
      <Parent2
        inputRef={el => this.inputElement = el}
      />
    );
  }
}

const RefsandtheDOM = () => (
	<section>
		<ul>
			<li>
				<strong>Adding a Ref to a Class Component</strong><br />
				<strong>Focus after click.</strong><br />
				<CustomTextInput />
				<hr />
				<strong>Focus at the begining.</strong><br />
				<AutoFocusTextInput />
			</li>
			<li>
				<strong>Refs and Functional Components</strong><br />
				<CustomTextInputF />
			</li>
			<li>
				<strong>Exposing DOM Refs to Parent Components</strong><br />
				<Parent />
				<hr />
				<strong>Exposing DOM Refs to  Parent Components</strong><br />
				<Grandparent />
			</li>
		</ul>
	</section>
	)

export default RefsandtheDOM;