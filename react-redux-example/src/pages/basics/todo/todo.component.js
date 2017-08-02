import React from 'react'

export default (props) => (
		<li onClick={props.onClick}
		    style={{textDecoration: props.completed ? 'line-through' : 'none'}}
		>
		{props.text}
		</li>
	)