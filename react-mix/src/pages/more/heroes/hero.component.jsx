import React from 'react';
import './hero.component.css';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', id: null};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

 componentDidMount() {
    var th = this;
    fetch('http://elrincondepascalito.juan.dev/api/heroes/' + this.props.location.pathname.split("/").pop(-1))  
    .then((response) => {
        return response.json()
    })
    .then((recurso) => {
        th.setState(recurso);
    })
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleClick(event) {
  	this.props.handleUpdateClick(this.state);
  }

	render() {
		return (
			<div className="hero">
			  <h2>{this.state.name} details!</h2>
			  <div>
			    <label>id: </label>{this.state.id}</div>
			  <div>
			    <label>name: </label>
			    <input onChange={this.handleChange} value={this.state.name} placeholder="name" />
			   </div>
			  <button onClick={this.props.history.goBack}>Back</button>
			  <button onClick={this.handleClick}>Save</button>
			</div>
			)
	}
}

export default Hero;