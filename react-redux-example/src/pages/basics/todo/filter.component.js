import React from 'react';

/* before filter 
export default (props) => (
	<button onClick={props.handleOnClick}>{props.children}</button>
)
*/

export default (props) => (
	<button onClick={() => props.handleOnClick(props.filter)} 
	        disabled={props.filter === props.currentFilter}
	>{props.children}</button>
)
