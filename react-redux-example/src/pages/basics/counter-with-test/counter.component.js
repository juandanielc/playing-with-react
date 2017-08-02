import React from 'react';
import {connect} from 'react-redux';


export const Counter = (props) => (
	<div>
		<h3># {props.state}</h3>
		<button onClick={props.onIncrement}>+</button>
		<button onClick={props.onDecrement}>-</button>
	</div> 
)

// map state
const mapStateToProps = function (state) {
  return {state};
}

// wrap the component for the Provider
export default connect(mapStateToProps)(Counter);


/*
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onDecrementClick = this.onDecrementClick.bind(this);
  }

  onIncrementClick() {
  	this.props.onIncrement();
  }

  onDecrementClick() {
  	this.props.onDecrement();
  }

  render() {
  	return (
			<div>
				<h3>{this.props.state}</h3>
				<button onClick={this.onIncrementClick}>+</button>
				<button onClick={this.onDecrementClick}>-</button>
			</div> 
			)
  }
}

export default Counter;
*/
 