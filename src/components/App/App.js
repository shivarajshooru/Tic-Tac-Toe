import React from "react";
import GridRow from "../GridRow/GridRow";
import Header from "../Header";
import Footer from "../Footer";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerTurn: "X",
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
    this.playerClick = this.playerClick.bind(this);
  }

  playerClick(i, j) {
    if (this.state.boardState[i][j] === "") {
      const currBoard = [...this.state.boardState];
      currBoard[i][j] = this.state.playerTurn;
      this.setState({
        boardState: currBoard,
        playerTurn: this.state.playerTurn === "X" ? "O" : "X",
      });
    }
  }

  componentDidUpdate() {
    let won = true;
    
    // check for rows
    for(let i=0; i<3;i++) {
        won = true;

        for(let j=1; j<3; j++) {
            if(this.state.boardState[i][j] !== this.state.boardState[i][j-1]) {
                won = false;
                break;
            }
        }
        if(won && this.state.boardState[i][0]!== '') {
            return this.alertWin(this.stateboardState[i][0]);
        }
    }
    // check for cols
    for(let j=0; j<3; j++) {
        won = true;

        for(let i=1; i<3; i++) {
            if(this.state.boardState[i][j] !== this.state.boardState[i-1][j]) {
                won = false;
                break;
            }
        }
        if(won && this.state.boardState[0][j]!== '') {
            return this.alertWin(this.state.boardState[0][j]);
        }
    }
    // check forward diagnol
    won = true;
    for(let i=1; i<3; i++) {
        if(this.state.boardState[i][i] !== this.state.boardState[i-1][i-1]) {
                won = false;
                break;
            }
    }
    if(won && this.state.boardState[0][0]!== '') {
            return this.alertWin(this.state.boardState[0][0]);
    }
    // check anti-diagnol
    won = true;
    for(let i=1; i<3; i++) {
        if(this.state.boardState[i][2-i] !== this.state.boardState[i-1][2-i+1]) {
                won = false;
                break;
            }
    }
    if(won && this.state.boardState[2][0]!== '') {
            return this.alertWin(this.state.boardState[2][0]);
    }
    // check for draw
    let draw = true;
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if(this.state.boardState[i][j] === '') {
                draw = false;
                break;
            }
        }
        if(draw === false) {
            break;
        }
    }
    if(draw) {
        return this.alertDraw();
}
}

alertWin(playerWon) {
    if(playerWon === 'X') {
        alert('Congratulations! Player1 wins');
    }
    else {
        alert('Congratulations! Player2 wins');
    }
    this.restGame();
}

alertDraw() {
    alert('Draw!');
    this.restGame();
    
}

restGame() {
  this.setState ({
    playerTurn: "X",
    boardState: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  });
}


  render() {
    return (
      <div className="container">
        <Header />
        <div id="board">
          {this.state.boardState.map((boardRow, rowIdx) => (
            <GridRow
            key={rowIdx}
              row={boardRow}
              rowIdx={rowIdx}
              playerClickCB={this.playerClick}
            />
          ))}
        </div>
        <Footer turn={this.state.playerTurn} />
      </div>
    );
  }
}
