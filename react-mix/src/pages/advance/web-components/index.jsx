import React from 'react';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
  }
}

function BrickFlipbox() {
  return (
    <brick-flipbox class="demo">
      <div>front</div>
      <div>back</div>
    </brick-flipbox>
  );
}

const WebComponents = () => (
	<section>
		<HelloMessage name="daniel" />
		<hr />
		<strong>One common confusion is that Web Components use "class" instead of "className".</strong>
		<BrickFlipbox />
	</section>
	)

export default WebComponents;