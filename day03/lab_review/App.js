import React from 'react';

// Add timer import
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,

		// For timer
		timerKey: 0,
		timeIsUp: false
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

	 // When timer is up, do not allow clicking
	 if (this.state.timeIsUp) {
		 return
	 }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,

		// Reset the timer
		timerKey: this.state.timerKey + 1
    });
  }

  // Handle timer's oncomplete event
  handleTimeIsUp() {
	  const history = this.state.history;
	  const current = history[this.state.stepNumber];
	  const winner = calculateWinner(current.squares);
	  if(winner) {
		  return;
	  }
	  this.setState({timeIsUp: true})
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

	 // Use let instead of const
	 // const winner = calculateWinner(current.squares);
    let winner = calculateWinner(current.squares);

	 // If no winner and if timeIsUp, determine winner (the current player loses)
	 if (!winner) {
		 if (this.state.timeIsUp) {
			 winner = this.state.xIsNext ? "O" : "X"
		 }
	 }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
		  <div>

		  {/* Adding a timer */}
		  {/* Use key props to reset the timer */}
		  {/* Use onComplete props to determine the winner */}
		  <CountdownCircleTimer
			 isPlaying
			 duration={20}
			 colors={['#004777', '#F7B801', '#A30000', '#A30000']}
			 colorsTime={[7, 5, 2, 0]}
			 key={this.state.timerKey}
			 onComplete={() => this.handleTimeIsUp()}
			>
			 {({ remainingTime }) => remainingTime + ' seconds left!'}
			</CountdownCircleTimer>

		  </div>
      </div>
    );
  }
}

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
      return squares[a];
    }
  }
  return null;
}


export default App;
