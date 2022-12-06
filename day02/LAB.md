# Day02: Lab

You have two missions:
* Finish the tutorial of tic-tac-toe (see below)
* Add a Countdown timer (just like in a chess game) to give a time limit of 20 seconds to each move.

## First mission: the tutorial

* You will want to use the day02/README.md instructions to set up your environment
* Then, follow https://reactjs.org/tutorial/tutorial.html#inspecting-the-starter-code to incrementally work on your project
* Finish all the way to the end, then your project should look like this: ![tic-tac-toe](https://github.com/alexwu77/web_programming/raw/main/day02/lab_result_01.png)

## Second mission: add a timer

### Add the timer code

We only want to allow each player 20 seconds to make a move. To do that, we want to add a countdown timer.

* Install https://www.npmjs.com/package/react-countdown-circle-timer to your project. Remember what we talked about during the class about the correct installation process.
	* The website uses `yarn`, but you should use `npm`.
* You can add the timer anywhere on the page. This is what I did in the `Game`'s `render()`:
```
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
	 <CountdownCircleTimer
		isPlaying
		duration={20}
		colors={['#004777', '#F7B801', '#A30000', '#A30000']}
		colorsTime={[7, 5, 2, 0]}
	  >
		{({ remainingTime }) => remainingTime + ' seconds left!'}
	  </CountdownCircleTimer>

	 </div>
  </div>
);
```

Result should look like this:
![tic-tac-toe](https://github.com/alexwu77/web_programming/raw/main/day02/lab_result_02_01.png)

### Add the game logic to timer

There are some logic you need to implement:
1. When a player makes a move, the timer restarts.
2. If the timer reaches 0 (time is up), and no winner is determined, the current player lost.

To do 1, please checkout the ***Restart timer at any given time*** section in the countdown timer's project page and follow the demo (hint: something to do with the `key` props.)

To do 2,
* You will want to use the `onComplete` props, and implement your own onComplete handler, similar to the `handleClick` approach.
* You might want to use a state `timeIsUp` to store whether the time is up.
* In `Game` `render()`, right after the code to determine the winner, you will want to add additional logic to check if `this.state.timeIsUp` is true, and declare the winner if that is the case. Note the winner should NOT be the current player.
* You will also want to disable clicking if the time is up.

To help you get started, below is what I think you will need to modify / implement:

In the `Game` component:
* `constructor()`: add two new states, `timerKey` and `timeIsUp`
* `handleClick(i)`:
  * Disallow clicking when time is up
  * use the state `timerKey` to restart the timer
* `render()`:
  * If no winner yet and time is up, declare winner
  * Add the timer component, such as this:

 ```
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
 ```
