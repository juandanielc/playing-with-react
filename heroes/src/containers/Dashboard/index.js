import React   from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

import HeroSearch from './HeroSearch';

import './index.css';

import {getVisibilityHeroes, setSelected, SHOW_TOP} from '../../actions';

const Cell = (props) => (
	<div key={props.hero.id} 
		  className="col-1-4" 
		  onClick={() => {props.setSelected(props.hero.id); props.goToEdit(); }}>
		<div className="module hero">
	      <h4>{props.hero.name}</h4>
	    </div>
	</div>
	)

const Dashboard = (props) => (
		<div className="heroes-dashboard">
			<h3>Top Heroes</h3>
			<div className="grid grid-pad">
				{
					props.heroes.map( (hero) =>
						<CellP key={hero.id} hero={hero} />
					)
				}
			</div>
			<div className="clear"></div>
			<HeroSearch />
			<CellP hero={{id:false, name:"Last Selected"}} />
		</div>
		)

const mapStateToProps = function (state) {
	const heroes = getVisibilityHeroes(state.heroes, SHOW_TOP);
	const selected = state.selected;
	return {heroes: heroes, selected: selected};
}

const mapDispatchToProps = function (dispatch) {
	return { 
		goToEdit: id=>dispatch(push('/heroes/edit')), 
		setSelected: id=>dispatch(setSelected(id)),
	};
}

const mapStateToPropsCell = function (state, props) {
	return {hero: props.hero};
}

const CellP = connect(mapStateToPropsCell, mapDispatchToProps)(Cell)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);