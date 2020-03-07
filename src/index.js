import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

// class Square extends React.Component {
//     render() {
//         const { props } = this;
//         const bgColor = props.highlight ? 'yellow' : 'white';
//         return (
//             <button style={{ backgroundColor: bgColor }} className='square' onClick={props.onClick}>
//                 {props.value}
//             </button>
//         );
//     }
// }

// class Board extends React.Component {
//     renderSquare(i) {
//         const winner = this.props.winner;
//         const highlighted = winner !== null && winner.indexOf(i) >= 0;

//         return (
//             <Square
//                 highlight={highlighted}
//                 value={this.props.squares[i]}
//                 key={i}
//                 onClick={() => this.props.onClick(i)}
//             />
//         );
//     }

//     renderBoard(winner) {
//         let board = [];
//         const colNum = 3;
//         const rowNum = 3;
//         for (let row = 0; row < rowNum; row++) {
//             let cols = [];
//             for (let col = 0; col < colNum; col++) {
//                 cols.push(this.renderSquare(row * 3 + col));
//             }
//             board.push(
//                 <div key={row} className='board-row'>
//                     {cols}
//                 </div>
//             );
//         }
//         return board;
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderBoard()}
//                 {/* <div className='board-row'>
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div> */}
//             </div>
//         );
//     }
// }

// class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [{ squares: Array(9).fill(null) }],
//             stepNumber: 0,
//             xIsNext: true
//         };
//     }

//     handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length - 1];
//         const squares = current.squares.slice();

//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }

//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             history: history.concat([
//                 {
//                     squares: squares,
//                     movePos: i
//                 }
//             ]),
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext
//         });
//     }

//     jumpTo(step) {
//         this.setState({
//             stepNumber: step,
//             xIsNext: step % 2 === 0
//         });
//     }

//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = calculateWinner(current.squares);

//         const moves = history.map((step, move) => {
//             let desc = 'Go to game start';
//             if (move) {
//                 let moveX = (step.movePos % 3) + 1;
//                 let moveY = Math.floor(step.movePos / 3) + 1;
//                 desc = desc = 'Go to move #' + move + ' (' + moveX + ', ' + moveY + ')';
//             }
//             const fontWeight = move === this.state.stepNumber ? 'bold' : 'normal';
//             return (
//                 <li key={move}>
//                     <button style={{ fontWeight: fontWeight }} onClick={() => this.jumpTo(move)}>
//                         {desc}
//                     </button>
//                 </li>
//             );
//         });

//         let status;
//         if (winner) {
//             status = 'Winner: ' + winner.join(' ');
//         } else {
//             status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//         }

//         return (
//             <div className='game'>
//                 <div className='game-board'>
//                     <Board squares={current.squares} winner={winner} onClick={i => this.handleClick(i)} />
//                 </div>
//                 <div className='game-info'>
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return lines[i];
//         }
//     }
//     return null;
// }

// // ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));
// serviceWorker.unregister();
