import React from 'react';
import FilterBtn from  './filter.component';

export default (props) => (
		<p>
			Show:
			{' '}<FilterBtn handleOnClick={props.setFilter} filter='SHOW_ALL' currentFilter={props.visibilityFilter}>All</FilterBtn>
			{' '}<FilterBtn handleOnClick={props.setFilter} filter='SHOW_ACTIVE' currentFilter={props.visibilityFilter}>Active</FilterBtn>
			{' '}<FilterBtn handleOnClick={props.setFilter} filter='SHOW_COMPLITED' currentFilter={props.visibilityFilter}>Completed</FilterBtn>
		</p>
	)