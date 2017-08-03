import React from 'react';
import {calculateWinner, Board} from './game';
import './game.css';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      ascending: true,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares).shape || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(
      {
        history: history.concat([{
          squares: squares, 
          position: i,
          player: squares[i]
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      }
    );
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  toogleSort() {
    const ascending = this.state.ascending;
    this.setState({
      ascending: !ascending,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let moves = history.map((step, move) => {
      const [ x , y ] = [ (step.position % 3) + 1 , ~~(step.position / 3) + 1 ];
      const desc = move ?
        'Move #' + move + ' position:( ' + x + ' , ' + y + ' ) Player: ' + step.player :
        'Game start';
      const cn = (move === this.state.stepNumber) ? "selected" : "";
      return (
        <li key={move}>
          <span className={cn} onClick={() => this.jumpTo(move)}>{desc}</span>
        </li>
      );
    });

    let desc = 'Descending';
    if( !this.state.ascending ) {
      moves = moves.reverse();
      desc = 'Ascending';
    }

    let status;
    if (winner.shape) {
      status = 'Winner: ' + winner.shape;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            cn={winner.hl.map( (a) => ( a ? "square highlight" : "square" ) ) }
          />
        </div>
        <div className="game-info">
          <div>{ status } <button onClick={() => this.toogleSort()}>{desc}</button></div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game;