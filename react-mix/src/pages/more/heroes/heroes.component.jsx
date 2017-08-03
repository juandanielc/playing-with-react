import React from 'react';
import './heroes.component.css';

class Heroes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', id: null};
		this.handleChange      = this.handleChange.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleSelectClick = this.handleSelectClick.bind(this);
		this.handleGoDetail    = this.handleGoDetail.bind(this);
		this.handleAddClick    = this.handleAddClick.bind(this);
		this.state={selectedHero: false};
	}

	handleChange(event) {
		this.setState({name: event.target.value});
	}

	handleAddClick() {
		this.props.handleAddClick(this.state);
	}

	handleDeleteClick(id) {
		this.props.handleDeleteClick(id);
	}

	handleSelectClick(hero) {
		this.setState({selectedHero: hero});
	}

	handleGoDetail() {
		this.props.history.push(this.props.match.url + '/detail/' + this.state.selectedHero.id);
	}

	render() {
		return (
			<div className="heroes">
				<h2>My Heroes</h2>
				<div>
				  <label>Hero name:</label> <input onChange={this.handleChange}/>
				  <button onClick={this.handleAddClick}>
				    Add
				  </button>
				</div>
				<ul className="heroes">
				{
				  this.props.heroes.map( (hero) =>
				  <li key={hero.id} onClick={() => this.handleSelectClick(hero)}>
				    <span className="badge">{hero.id}</span>
				    <span>{hero.name}</span>
				    <button onClick={id => this.handleDeleteClick(hero.id)} className="delete">x</button>
				  </li>
				  )
				}
				</ul>
				{	this.state.selectedHero !== false && 
					(<div>
					  <h2>
					    {this.state.selectedHero.name.toUpperCase()} is my hero
					  </h2>
					  <button onClick={() => this.handleGoDetail()}>View Details</button>
					</div>)
				}
			</div>
			)
	}
}

export default Heroes;