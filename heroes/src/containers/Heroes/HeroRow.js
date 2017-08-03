import React from 'react';
import { Button } from 'react-bootstrap';

class HeroRow extends React.Component {
    constructor(props) {
        super(props);
        this.removeHero = this.removeHero.bind(this);
    }

    removeHero(e) {
    	e.preventDefault();
    	this.props.removeHero();
    }

    render() {
        return (
		<li onClick={this.props.setSelected} className={this.props.className}>
			<span className="badge">{this.props.id}</span>
			<span>{this.props.name}</span>
		<Button onClick={this.removeHero} className="delete" bsStyle="danger">x</Button>
		</li>
        );
    }
}

export default HeroRow;
