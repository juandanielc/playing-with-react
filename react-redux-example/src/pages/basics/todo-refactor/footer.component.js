import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from './todo.actions';
import Button from  './filter.component';

/*this container component and the store (because is passing by context) will be replace by mapStateToProps 
class FilterBtn extends React.Component {

	componentDidMount() {
		this.unsubscribe = store.subscribe( () => this.forceUpdate() );
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const state = store.getState(); 
		return <Link active={this.props.filter === state.visibilityFilter} 
					 onClick={() => setFilter(this.props.filter)}>{this.props.children}</Link>
	}
}
*/

const mapStateToProps = function (state, props) {
	return {active: props.filter === state.visibilityFilter};
}

const mapDispatchToProps = function (dispatch, props) {
	return { onClick: () => { dispatch( setFilter( props.filter ) ) } };
}

const FilterBtn = connect(mapStateToProps, mapDispatchToProps)(Button);

export default () => (
		<p>
			Show:
			{' '}<FilterBtn filter='SHOW_ALL'>All</FilterBtn>
			{' '}<FilterBtn filter='SHOW_ACTIVE'>Active</FilterBtn>
			{' '}<FilterBtn filter='SHOW_COMPLITED'>Completed</FilterBtn>
		</p>
	)