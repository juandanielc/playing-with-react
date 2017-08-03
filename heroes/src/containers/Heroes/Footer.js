import React from 'react';

export default (props) => {
	if (props.selectedHero) return (
	<div>
	  <h2>
	    {props.selectedHero.name.toUpperCase()} is my hero
	  </h2>
	  <button onClick={() => props.goToEdit(props.selectedHero.id)}>View Details</button>
	</div>
	);
	return null;
}