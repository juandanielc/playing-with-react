import React from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import {getVisibilityHeroes, setSelected, setValue, SHOW_FILTER} from '../../actions';

class HeroSearch extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
	    this.props.setValue(event.target.value);
	}

	render() {
		return (
			<div id="search-component">
			  <h4>Hero Search</h4>
	          <div className="input-group">
	            <input type="text" 
	            	   className="form-control" 
	            	   value={this.props.value} 
	            	   placeholder="Search a hero..."
	            	   onChange={this.handleChange} />
	          </div>
			  	{
			  		this.props.heroes.length > 0 && 
			  		this.props.heroes.map( (hero) => (<div className={"search-result"} 
			  			                                   key={hero.id} 
			  			                                   onClick={() => { this.props.setSelected(hero.id); 
			  			                                   					this.props.goToEdit(); 
			  			                                   				   }
			  			                                   			}
			  			                              >
			  			                              {hero.name}
			  			                              </div>) 
			  							 )
			  	}

			</div>
		)
	}
}

const mapStateToProps = function (state) {
	const value = state.value;
	const heroes = getVisibilityHeroes(state.heroes, SHOW_FILTER, state.value);
	const selected = state.selected;
	return {heroes: heroes, selected: selected, value: value};
}

const mapDispatchToProps = function (dispatch) {
	return { goToEdit: id=>dispatch(push('/heroes/edit')), 
	         setSelected: id=>dispatch(setSelected(id)),
	         setValue: value=>dispatch(setValue(value))
	       };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroSearch);