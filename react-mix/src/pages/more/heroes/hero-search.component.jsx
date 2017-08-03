import React from 'react';
import './hero-search.component.css';

class HeroSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', heroes: []};
		this.heroes = [];

		this.handleChange = this.handleChange.bind(this);
		this.handleGoDetail    = this.handleGoDetail.bind(this);
	}

	handleChange(event) {
	    const self = this;
	    this.setState({
	      name: event.target.value
	    }, function() {
	      self.performSearch();
	    });

	}

	performSearch() {
		const self = this;

		if(this.state.name !== '') {
		    fetch('http://elrincondepascalito.juan.dev/api/heroes/search/' + this.state.name)  
		    .then((response) => {
		        return response.json()
		    })
		    .then((recurso) => {
		        self.setState({
		            heroes: recurso
		          });
		    });
		} else {
			self.setState({
				heroes: []
			});
		}
	}

	handleGoDetail(id) {
		this.props.history.push(this.props.match.url + '/detail/' + id);
	}

	render() {
		return (
			<div id="search-component">
			  <h4>Hero Search</h4>
			  <div>
			    <input id="search-box" onChange={this.handleChange} value={this.state.name} />
			  	{
			  		this.state.heroes.length > 0 && this.state.heroes.map( (hero) => (<div className={"search-result"} key={hero.id} onClick={() => this.handleGoDetail(hero.id)}>
							{hero.name}
						</div>) )
			  	}
			  </div>
			</div>
		)
	}
}

export default HeroSearch; 