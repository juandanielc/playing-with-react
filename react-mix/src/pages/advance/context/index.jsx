import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.props.color}}>
        {this.props.children}
      </button>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    const color = "purple";
    const children = this.props.messages.map((message,i) =>
      <Message key={i} text={message.text} color={color} />
    );
    return <div>{children}</div>;
  }
}


class Button2 extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button2.contextTypes = {
  color: PropTypes.string
};

class Message2 extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button2>Delete</Button2>
      </div>
    );
  }
}

class MessageList2 extends React.Component {
  getChildContext() {
    return {color: "purple"};
  }

  render() {
    const children = this.props.messages.map((message, i) =>
      <Message2 key={i} text={message.text} />
    );
    return <div>{children}</div>;
  }
}

MessageList2.childContextTypes = {
  color: PropTypes.string
};

const messages = 
	[ 
	  {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, eum! Exercitationem animi asperiores, facere velit necessitatibus voluptatum reprehenderit est! Repellat numquam, dolorum accusamus est doloremque! Inventore fugit corporis deserunt aliquam.'},
	  {text: 'This is other case'},
	  {text: 'More text is comming for the messages'} 
	];

const Context = () => (
	<section>
		<strong>Manualy</strong><br />
		<MessageList messages={messages} />
		<hr />
		<strong>Using context</strong><br />
		<MessageList2 messages={messages} />
	</section>
	)

export default Context;