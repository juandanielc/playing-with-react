import React from 'react';

class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
    	this.props.handleClick({i: this.props.pos.i, j: this.props.pos.j});
	}

	render() {
		return (
			<td className={this.props.cellClass} onClick={this.handleClick}>
			  {this.props.text}
			  <div className="win-line" />
			</td>
			)
	}
}

class Board extends React.Component {

	render()  {
		let rows = [];
		for (let i = 0; i < 3; i++) {
			let row = []; 
			for (let j = 0; j < 3; j++) {
				let cellClass='cell';
				if(this.props.dataBoard[i][j] !== '') cellClass='cell-filled';
				if(this.props.winnerPos) {
					if(this.props.winnerPos.t === 1 && this.props.winnerPos.s === i) cellClass='cell-win cell-win-1';
					else if(this.props.winnerPos.t === 2 && this.props.winnerPos.s === j) cellClass='cell-win cell-win-2';
					else if(this.props.winnerPos.t === 3 && i === j) cellClass='cell-win cell-win-3';
					else if(this.props.winnerPos.t === 4 && i + j === 2) cellClass='cell-win cell-win-4';
				}
				
				row.push(<Cell key={i+'-'+j} 
							   text={this.props.dataBoard[i][j]} 
							   pos={{i:i,j:j}} 
							   handleClick={this.props.handleCellClick} 
							   cellClass={cellClass} />);
			}
			rows.push(<tr key={i}>{row}</tr>);
		}

		return (
			<div className="wraper-board">
				<table>
					<tbody>
						{rows}
					</tbody>
				</table>
				{this.props.children}
			</div>
			)
	}
}

export default Board;