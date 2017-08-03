import React from 'react';

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

const e = React.createElement;

const HelloWorld = () => e('div', null, 'Hello World');

const ReactWithoutJSX = () => (
	<section>
		<Hello toWhat = 'World'/>
		<hr />
		<HelloWorld />
		<hr />
		<a href="https://github.com/mlmorg/react-hyperscript" target="_blank" rel="noopener noreferrer">react-hyperscript</a>
	</section>
	)

export default ReactWithoutJSX;