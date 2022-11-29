# Intro to ReactJS

## ReactJS Basics

### Project Structure

* `public/`
	* `public/index.html`
* `src/`
	* `src/index.js`
	* `src/App.js` and `src/App.css`
* `node_modules/`
* `package.json`


### JSX
Example: `const element = <h1>Hello, world!</h1>;`

Use curly braces: `const element = <img src={user.avatarUrl}></img>;` (Don’t put quotes around curly braces)

Can have children:
```
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```


### Components

Functional vs Class-Components
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The `props`: `const element = <Welcome name="Sara" />;`

Composing components with `props`
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

Note: `props` are read-only. To maintain and change a component's internal state, use `state`.


## A Game of Tic-Tac-Toe

Follow this tutorial: https://reactjs.org/tutorial/tutorial.html

To start:
```
npx create-react-app tic-tac-toe
cd tic-tac-toe
npm start
```

Edit `src/index.css`:
```
body {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
}

ol, ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: "";
  display: table;
}

.status {
  margin-bottom: 10px;
}

.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.square:focus {
  outline: none;
}

.kbd-navigation .square:focus {
  background: #ddd;
}

.game {
  display: flex;
  flex-direction: row;
}

.game-info {
  margin-left: 20px;
}
```


Edit `src/App.js`:
```
import React from 'react';

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default App;

```

***Your Lab Assignment: finish the Tutorial including the last part "Add Time Travel"***
