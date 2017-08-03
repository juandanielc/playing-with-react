import React from 'react';
import classNames from 'classnames';

class RowHistory extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
    	this.props.handleClick(this.props.step);
	}

	render() {
		let text = this.props.pos ? 
				   'Player ' + ((this.props.step % 2) ? 'X' : 'O') + ': position [ ' + ( this.props.pos.i + 1 ) + ' - ' + ( this.props.pos.j + 1 ) + ' ]' : 
				   'Game Start'; 
		return <div onClick={this.handleClick} className={this.props.cn}>{text}</div>
	}
}

class History extends React.Component {
	render() {
		let rows = this.props.history.map((step) => 
			<RowHistory key={step.step}
						step={step.step}
						pos={step.pos}
						cn={ classNames({ 'selected': this.props.step === step.step, 'btn': true }) }
						handleClick={this.props.handleHistClick} 
					/>
			);
		return (
			<div className="history-table">
				{rows}
			</div>
		)
	}
}

export default History;
