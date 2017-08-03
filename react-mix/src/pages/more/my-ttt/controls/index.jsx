import React from 'react';

class ControlBtn extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
    	this.props.handleClick(this.props.type);
	}

	render() {
		return (
			<button className={this.props.cn} onClick={this.handleClick}>{this.props.text}</button>
			)
	}
}

class Controls extends React.Component {
	handleClick(type) {
		switch(type) {
			case 'asc': this.props.handleAscClick();
						break;
			case 'undo': this.props.handleUndoRedoClick(-1);
						break;
			case 'redo': this.props.handleUndoRedoClick(1);
						break;
			case 'reset': this.props.handleResetClick();
						break;
			default: break;
		}
    	
	}

	render() {
		return (
			<div className="wraper-controls">
				<ControlBtn cn="btn" handleClick={type => this.handleClick(type)} type='asc' text={this.props.isAsc ? 'Ascending' : 'Descending'} />
				<ControlBtn cn="btn" handleClick={type => this.handleClick(type)} type='undo' text="Undo" />
				<ControlBtn cn="btn" handleClick={type => this.handleClick(type)} type='redo' text="Redo" />
				<ControlBtn cn="btn" handleClick={type => this.handleClick(type)} type='reset' text="Reset" />
			</div>
			)
	}
}

export default Controls; 