(this.webpackJsonptictac=this.webpackJsonptictac||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(0),n=a(1),i=a.n(n),s=a(8),c=a.n(s),o=(a(15),a(9)),u=a(2),l=a(3),b=a(6),h=a(5),d=a(4),f=(a(16),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(u.a)(this,a),(r=e.call(this,t)).clickFn=r.clickFn.bind(Object(b.a)(r)),r}return Object(l.a)(a,[{key:"clickFn",value:function(){this.props.playerClickCB(this.props.rowIdx,this.props.colIdx)}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"grid-item",onClick:this.clickFn,children:this.props.value})}}]),a}(i.a.Component)),p=(a(17),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){return Object(u.a)(this,a),e.call(this,t)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(r.jsx)("div",{className:"grid-row",children:this.props.row.map((function(e,a){return Object(r.jsx)(f,{value:e,colIdx:a,rowIdx:t.props.rowIdx,playerClickCB:t.props.playerClickCB},a)}))})}}]),a}(i.a.Component)),j=(a(18),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"header",children:"Tic Tac Toe"})}}]),a}(i.a.Component)),v=(a(19),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){return Object(u.a)(this,a),e.call(this,t)}return Object(l.a)(a,[{key:"getText",value:function(t){return"X"===t?"player 1's turn":"O"===t?"player 2's turn":void 0}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"turn",children:this.getText(this.props.turn)})}}]),a}(i.a.Component)),O=(a(20),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(u.a)(this,a),(t=e.call(this)).state={playerTurn:"X",boardState:[["","",""],["","",""],["","",""]]},t.playerClick=t.playerClick.bind(Object(b.a)(t)),t}return Object(l.a)(a,[{key:"playerClick",value:function(t,e){if(""===this.state.boardState[t][e]){var a=Object(o.a)(this.state.boardState);a[t][e]=this.state.playerTurn,this.setState({boardState:a,playerTurn:"X"===this.state.playerTurn?"O":"X"})}}},{key:"componentDidUpdate",value:function(){for(var t=!0,e=0;e<3;e++){t=!0;for(var a=1;a<3;a++)if(this.state.boardState[e][a]!==this.state.boardState[e][a-1]){t=!1;break}if(t&&""!==this.state.boardState[e][0])return this.alertWin(this.stateboardState[e][0])}for(var r=0;r<3;r++){t=!0;for(var n=1;n<3;n++)if(this.state.boardState[n][r]!==this.state.boardState[n-1][r]){t=!1;break}if(t&&""!==this.state.boardState[0][r])return this.alertWin(this.state.boardState[0][r])}t=!0;for(var i=1;i<3;i++)if(this.state.boardState[i][i]!==this.state.boardState[i-1][i-1]){t=!1;break}if(t&&""!==this.state.boardState[0][0])return this.alertWin(this.state.boardState[0][0]);t=!0;for(var s=1;s<3;s++)if(this.state.boardState[s][2-s]!==this.state.boardState[s-1][2-s+1]){t=!1;break}if(t&&""!==this.state.boardState[2][0])return this.alertWin(this.state.boardState[2][0]);for(var c=!0,o=0;o<3;o++){for(var u=0;u<3;u++)if(""===this.state.boardState[o][u]){c=!1;break}if(!1===c)break}return c?this.alertDraw():void 0}},{key:"alertWin",value:function(t){"X"===t?alert("Congratulations! Player1 wins"):alert("Congratulations! Player2 wins"),this.restGame()}},{key:"alertDraw",value:function(){alert("Draw!"),this.restGame()}},{key:"restGame",value:function(){this.setState({playerTurn:"X",boardState:[["","",""],["","",""],["","",""]]})}},{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{}),Object(r.jsx)("div",{id:"board",children:this.state.boardState.map((function(e,a){return Object(r.jsx)(p,{row:e,rowIdx:a,playerClickCB:t.playerClick},a)}))}),Object(r.jsx)(v,{turn:this.state.playerTurn})]})}}]),a}(i.a.Component)),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),r(t),n(t),i(t),s(t)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),k()}],[[21,1,2]]]);
//# sourceMappingURL=main.bfcb3e00.chunk.js.map