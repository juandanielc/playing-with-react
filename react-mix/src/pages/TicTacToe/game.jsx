import React from 'react';

/*class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}*/

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let hl = Array(9).fill(null);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      hl[a] = hl[b] = hl[c] = true; 
      return {shape: squares[a], hl: hl };
    }
  }
  return {shape: null, hl: Array(9).fill(null) };
}

function Square(props) {
  return (
    <button className={props.cn} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        cn={this.props.cn[i]}
      />
    );
  }

  /*renderRow(row) {
    let col = Array(3);
    for (let i = 0; i < 3; i++) {
      col[i] = this.renderSquare( ( row * 3 ) + i );
    }
    
    return (
      <div className="board-row" key={row}>
        {col}
      </div>
    );
  }*/

  render() {

    /*let row = Array(3);
    for (let i = 0; i < 3; i++) {
      row[i] = this.renderRow(i);
    }*/

    let rows = [];
    let cells = [];
    let cellNumber = 0;
    for (let i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        cells.push(this.renderSquare(cellNumber))
        cellNumber++
      }
      rows.push(<div className="board-row" key={i}>{ cells }</div>)
      cells = [];
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}
