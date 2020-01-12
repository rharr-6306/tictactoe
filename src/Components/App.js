import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Board from  './Board.js';
import Scoreboard from './Scoreboard.js';

function App() {
  return (
    <div className="App">
      <h1 className="title">TicTacToe</h1>
      <div id="directions">
        <h1>
          How To Play (feat. <a href="https://www.wikihow.com/Play-Tic-Tac-Toe">WikiHow</a>)
        </h1>
        <ol>
          <li>Draw the board. (we did that for you)</li>
          <li>Have the first player, <b>X</b>, go first.</li>
          <li>Have the second player, <b>O</b>, go second.</li>
          <li>
            Keep alternating until one player has a row of <b>three</b> or if there are <b>no spaces left</b>.
          </li>
        </ol>
      </div>
      <Board />
    </div>
  );
}

export default App;

/*

  App
  |- Directions
  |- Board
  |- Scoreboard

  Features:
  - AI/Algorithm

*/
