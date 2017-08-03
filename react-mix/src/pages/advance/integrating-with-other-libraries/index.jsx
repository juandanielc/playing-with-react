import React from 'react';
import $ from 'jquery';

class Chosen extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    //this.$el.chosen();
    //console.log(this.$el);
    this.$el.select(function(){alert('hola')});
  }

  componentWillUnmount() {
    //this.$el.chosen('destroy');	
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

function Example() {
  return (
    <Chosen onChange={value => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}

const IntegratingwithOtherLib = () => (
	<section>
		<Example /><br />
		Aparently this topic works better just as a external libraries. To check the topic 
		<a href='https://facebook.github.io/react/docs/integrating-with-other-libraries.html' 
		   target="_blank" 
		   rel="noopener noreferrer">click here</a>
	</section>
	)

export default IntegratingwithOtherLib;