import React from 'react';
import Dashboard from './dashboard.component';
import Heroes from './heroes.component';
import Hero from './hero.component';
import { Switch, Route, NavLink } from 'react-router-dom';
import './app.component.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {heroes: []};
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleAddClick    = this.handleAddClick.bind(this);
  }

  handleDeleteClick(id) {
  	let self = this;
	fetch('http://elrincondepascalito.juan.dev/api/heroes/' + id, {
	method: 'DELETE',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
		body: JSON.stringify(this.state)
	})
	.then(() => self.getHeroesList())
  }

  getHeroesList() {
  	let self = this;
    fetch('http://elrincondepascalito.juan.dev/api/heroes')  
    .then((response) => {
        return response.json()
    })
    .then((recurso) => {
        self.setState({
            heroes: recurso
          });
    })
  }

  handleUpdateClick(hero) {
  	  let self = this;
	  fetch('http://elrincondepascalito.juan.dev/api/heroes/' + this.props.location.pathname.split("/").pop(-1), {
	  method: 'PUT',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  	body: JSON.stringify(hero)
	  }).then(() => {self.getHeroesList(); self.props.history.goBack();})
  }

  handleAddClick(hero) {
  	  let self = this;
	  fetch('http://elrincondepascalito.juan.dev/api/heroes/', {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  	body: JSON.stringify({name:hero.name})
	  }).then(() => self.getHeroesList())
  }

 componentDidMount() {
    this.getHeroesList()
  }
	render() {
		if(this.state.heroes.length > 0) {
			let DashboardC = () => <Dashboard {...this.props} heroes={this.state.heroes.slice(1,5)} />;
			let HeroesC = () => <Heroes {...this.props}
			                            heroes={this.state.heroes} 
			                            handleDeleteClick={this.handleDeleteClick}
			                            handleAddClick={this.handleAddClick}
			                            />;
			let HeroC = () => <Hero {...this.props} handleUpdateClick={(hero) => this.handleUpdateClick(hero)}/>;
			return (
				<section className='heroes-app'>
				    <h1>Tour of Heroes</h1>
					<nav>
						<NavLink to={this.props.match.url + "/dashboard"}>Dashboard</NavLink>
						<NavLink to={this.props.match.url + "/list"}>Heroes</NavLink>
					</nav>
				    <Switch>
				      <Route component={DashboardC} path={ this.props.match.url } exact />
				      <Route component={DashboardC} path={ this.props.match.url + "/dashboard" } exact />
				      <Route component={HeroesC} path={ this.props.match.url + "/list" } exact />
				      <Route component={HeroC} path={ this.props.match.url + "/detail/:id" }/>
				    </Switch>
				</section>
				)
		}
		return (<section className='heroes-app'>Loading ... </section>);
	}
}

export default App;