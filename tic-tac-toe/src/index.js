import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className={props.win ? "winSquare" : "square"} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    let win=false;
    if(this.props.winner) {
      if(this.props.winner.positions[0] === i || 
         this.props.winner.positions[1] === i || 
         this.props.winner.positions[2] === i
        ) {
        win=true;
      }
    }
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        win={win}
      />
    );
  }

  render() {
    let toRender = [];
    let k = 0;
    for (var i = 0; i < 3; i++) {
      let toRenderInternal = [];
      for (var j = 0; j < 3; j++) {
        toRenderInternal[j] = this.renderSquare(k);
        k++;
      }
      toRender[i] = <div className="board-row" key={i}>{toRenderInternal}</div>
    }
    return (
      <div>
        {toRender}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      asc: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          x: ( (i % 3) + 1 ),
          y: ( ( i / 3 << 0) + 1)
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  toggle() {
    this.setState({
      asc: !this.state.asc
    });
  }

  render() {
    const history = this.state.history;
    const asc = this.state.asc;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Move #" + move + "(" + step.x + " - " + step.y + ")" : "Game start";
      return (
        <li key={move}>
          <a onClick={() => this.jumpTo(move)}>{ this.state.stepNumber !== move ? desc : <strong>{desc}</strong>}</a>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner.player;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    if(!asc) {
      moves.reverse();
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            winner={winner}
          />
          <button onClick={() => this.toggle()}>{asc ? 'ASC' : 'DESC'}</button> 
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {player: squares[a], positions: lines[i]};
    }
  }
  return null;
}
