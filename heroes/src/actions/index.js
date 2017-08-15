import * as api from '../api';
import store from '../store';

export const ADD_HERO     = 'ADD_HERO';
export const UPDATE_HERO  = 'UPDATE_HERO';
export const REMOVE_HERO  = 'REMOVE_HERO';

export const LOAD_HEROES   = 'LOAD_HEROES';

export const SHOW_ALL  	  = 'SHOW_ALL';
export const SHOW_TOP  	  = 'SHOW_TOP';
export const SHOW_FILTER  = 'SHOW_FILTER';

export const SELECT 	  = 'SELECT';

export const FILTER_VALUE = 'FILTER_VALUE';

export const addHero = (hero) => {
	return dispatch => {
		return api.addHero(hero)
			.then((hero) => {
				dispatch({type: ADD_HERO, hero: hero});
			})
	}
}
export const updateHero = (hero) => {
	return dispatch => {
		return api.updateHero(hero)
			.then((hero) => {
				dispatch({type: UPDATE_HERO, hero: hero});
			})
	}
}

export const removeHero = (id) => {
	return dispatch => {
		return api.removeHero(id)
			.then(() => {
				dispatch({type: REMOVE_HERO, id: id});
			})
	}
}

export const loadHeroes = () => {
  return dispatch => {
    return api.loadHeroes()
			.then((heroes) => {
			    dispatch({type: LOAD_HEROES, heroes: heroes});
			})
  }
}

export const getVisibilityHeroes = (heroes, filter, value='') => {
	switch (filter) {
		case SHOW_ALL: return heroes;
		case SHOW_TOP: return heroes.slice(1, 5);
		case SHOW_FILTER: return value.length > 0 ? heroes.filter((h) => h.name.toLowerCase().includes(value.toLowerCase()) ) : [];
		default: return heroes;
	}
}

export const setSelected = (id) => ({type: SELECT, id: id});
export const setValue = (value) => ({type: FILTER_VALUE, value: value});

export const getHero = (heroes, id) => {
	let hId = id; 
	if(hId) {
		localStorage.setItem('lastHeroSelected', hId);
	} else {
		hId = localStorage.getItem('lastHeroSelected');
	}
	return heroes.find((t) => t.id === hId);
}

export const getToken = () => {
	sessionStorage.setItem('jwtToken', '');
	api.auth()
		.then((token) => {
			sessionStorage.setItem('jwtToken', token.token);
			store.dispatch(loadHeroes());
		})
}

getToken();