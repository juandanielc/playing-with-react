import React from 'react';
import History from './history';
import Header from './header';
import Board from './board';
import Controls from './controls';

import './index.css';

class MyTTT extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{board: [['','',''],['','',''],['','','']], pos: null, step: 0}],
			xIsNext: true,
			step: 0,
			isAsc: true
		}
		this.handleCellClick     = this.handleCellClick.bind(this);
		this.handleHistClick     = this.handleHistClick.bind(this);
		this.handleAscClick      = this.handleAscClick.bind(this);
		this.handleUndoRedoClick = this.handleUndoRedoClick.bind(this);
		this.handleResetClick    = this.handleResetClick.bind(this);
	}

	_getWinner(a) {
		if(a === 'XXX') return 'X';
		if(a === 'OOO') return 'O';
		return null;
	}

	getWinner(dataBoard) {
		let d1 = '';
		let d2 = '';
		let w = null;
		for (var i = 0; i < 3; i++) {
			let a = dataBoard[i].join('');
			w = this._getWinner(a);
			if(w) return ({win:w, pos:{t:1,s:i}});
			d1 += dataBoard[i][i];
			d2 += dataBoard[i][2-i];
			a='';
			for (var j = 0; j < 3; j++) {
				a+=dataBoard[j][i];
			}
			w = this._getWinner(a);
			if(w) return ({win:w, pos:{t:2,s:i}});
		}
		w = this._getWinner(d1);
		if(w) return ({win:w, pos:{t:3,s:1}});
		
		w = this._getWinner(d2);
		if(w) return ({win:w, pos:{t:4,s:1}});

		return null;
	}

	handleCellClick(pos) {
		let history = this.state.history.slice(0, this.state.step + 1);
		let dataBoard = cloneDataBoard(history[history.length - 1].board);
		if(dataBoard[pos.i][pos.j] === '') {
			const winner = this.getWinner(dataBoard);
			if(!winner) {
				let step = history.length;
				dataBoard[pos.i][pos.j] = (this.state.step % 2) ? 'O' : 'X';
				history.push({board: dataBoard, pos: pos, step: step});

			    this.setState(prevState => ({
					history: history,
					xIsNext: !prevState.xIsNext,
					step: step
			    }));
			} else {
				alert(winner.win + " was the winner!!!");
			}
		}
		
	}

	handleHistClick(step) {
		this.setState( { step: step } );
	}

	handleAscClick() {
		this.setState(prevState => ({
			isAsc: !prevState.isAsc
	    }));
	}

	handleUndoRedoClick(num) {
		const step = this.state.step + num;
		if( step < 0 ) return;
		if( step >= this.state.history.length) return;
		this.setState( { step: step } );
	}

	handleResetClick() {
		this.setState( {
			history: [{board: [['','',''],['','',''],['','','']], pos: null, step: 0}],
			xIsNext: true,
			step: 0,
			isAsc: true
		} );
	}

	render() {
		const history       = this.state.history.slice();
		const dataBoard     = history[this.state.step].board;
		const player        = (this.state.step % 2) ? 'O' : 'X';
		const winner        = this.getWinner(dataBoard);
		const playerWinner  = winner ? winner.win : null;
		const winnerPos 	= winner ? winner.pos : null;

		return (
			<div className="my-tic-tac-toe-wraper">
				<Header player={player} winner={playerWinner} />
				<Board dataBoard={dataBoard}
					   winnerPos={winnerPos}
					   handleCellClick={pos => this.handleCellClick(pos)} >
					<Controls handleAscClick={this.handleAscClick} 
							  handleUndoRedoClick={this.handleUndoRedoClick}
							  handleResetClick={this.handleResetClick}
					          isAsc={this.state.isAsc} />
				</Board>
				<History history={this.state.isAsc ? history : history.reverse()}
						 step={this.state.step}
						 handleHistClick={step => this.handleHistClick(step)}
						/>
				<div className="clear" />
			</div>
		)
	}
}

function cloneDataBoard(db) {
	return db.map(function(arr) {
    return arr.slice();
});
}

export default MyTTT;