import React from "react";
import "./style.css";

export default class Footer extends React.Component {
   constructor(props) {
       super(props);
   }

   getText(playerTurn) {
       if (playerTurn === "X") {
           return "player 1's turn";
       }
       if (playerTurn === "O") {
           return "player 2's turn";
       }
   }
   
    render() {
        return <div className="turn">{this.getText(this.props.turn)}</div>
        }
        }