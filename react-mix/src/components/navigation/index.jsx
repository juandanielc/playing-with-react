import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './index.css';

function __createRoute(r, b, i) {
	let val  = {};

	val.key  = i;
	val.path = r.param ? b + r.param : b + r.url;
	if(r.url === '') val.exact = true;
	if (r.type === 'component')
		val.component = r.value;
	else
		val.render = r.value;
	return React.createElement(Route, val);
}

export const Routes = (props) => { 
	let home = false;
	let menu = props.menu.map( (l, i) => {
		if(l.home) {
			let d = {value:l.value, url:'', type: 'component'}
			home = __createRoute(d, props.parentPath, i, );
		}
		return __createRoute(l, props.parentPath, l.url+i);
	} );

	if( home ) menu.push( home );
	return (
    	<Switch>{menu}</Switch>
	);
}

export const MenuItems = (props) => (
	<ul>
	{
		props.menu.map( (l, i) => (<li key={i}><NavLink to={props.parentPath + l.url} className={props.className}>{l.name}</NavLink></li>) )
	}
	</ul>
	);



