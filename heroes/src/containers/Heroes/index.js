import React   from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';	

import Footer   from './Footer';

import './index.css';

import {getVisibilityHeroes, setSelected, removeHero, SHOW_ALL} from '../../actions';

import AddHero from './AddHero';
import HeroList from './HeroList';

const mapStateToProps = function (state) {
	const heroes = getVisibilityHeroes(state.heroes, SHOW_ALL);
	const selected = state.selected;
	return {heroes: heroes, selected: selected};
}

const mapDispatchToProps = function (dispatch) {
	return { removeHero: id=>dispatch(removeHero(id)), setSelected: id=>dispatch(setSelected(id))};
}

const VisibleHeroList = connect(mapStateToProps, mapDispatchToProps)(HeroList);

const mapStateToPropsFooter = function (state) {
	const selectedHero = state.heroes.find((h) => (h.id === state.selected));
	return {selectedHero: selectedHero};
}

const mapDispatchToFooter = function (dispatch) {
	return { goToEdit: id=>dispatch(push('/heroes/edit')) };
}

const ContainerFooter = connect(mapStateToPropsFooter, mapDispatchToFooter)(Footer);

export default (props) => (
			<div className="heroes">
				<h2>My Heroes!!!</h2>
				<AddHero />
				<VisibleHeroList />
				<ContainerFooter />
			</div>
			)