import React from 'react';
import { Link } from 'react-router-dom';
import HeroSearch from './hero-search.component';
import './dashboard.component.css';

class Dashboard extends React.Component {
	render() {
		return (
		<div className="heroes-dashboard">
			<h3>Top Heroes</h3>
			<div className="grid grid-pad">
				{
					this.props.heroes.map( (hero) =>
						<Link key={hero.id} className="col-1-4" to={this.props.match.url + "/detail/" + hero.id}>
							<div className="module hero">
						      <h4>{hero.name}</h4>
						    </div>
						</Link>
					)
				}
			</div>
			<HeroSearch {...this.props} />
		</div>
		)
	}
}

export default Dashboard;