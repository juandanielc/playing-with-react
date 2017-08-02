import React from 'react';

export default (props) => (
		<button onClick={props.onClick} 
	            disabled={props.active}>{props.children}</button>
	)

