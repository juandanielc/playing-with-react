import * as ActionTypes from '../actions';

/*const hero = (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.ADD_HERO:
			return {
				  id: action.id,
				  name: action.name
			  };

		case ActionTypes.UPDATE_HERO:
			return {
				  id: state.id,
				  name: action.name
			  };

		default: 
			return state;
	}
};
*/
/*const getNextId = (heroes) => {
	if(typeof heroes !== 'undefined' &&  heroes.length ) {
		return heroes.reduce((maxId, h) => ( +maxId.id < +h.id ? h : maxId ) ).id + 1;
	}
	return 1;
}*/

const heroes = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.ADD_HERO:
			//const preHero = {...action, id: getNextId( state )};
			return [ ...state, action.hero ];

		case ActionTypes.REMOVE_HERO:
			return state.filter((h) => (h.id !== action.id));

		case ActionTypes.UPDATE_HERO:
			return state.map( (h) => ( h.id === action.hero.id ? action.hero : h ) );

		case ActionTypes.LOAD_HEROES:
			return action.heroes;
		default: 
			return state;
	}
};

const selected = (state = false, action) => {
	if ( action.type === ActionTypes.SELECT ) {
		return action.id;
	}
	return state;
}

const filterValue = (state = '', action) => {
	if ( action.type === ActionTypes.FILTER_VALUE ) {
		return action.value;
	}
	return state;
}

export default {heroes, /*hero,*/ selected, filterValue};