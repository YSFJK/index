import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
    render() {
      const status = 'Next player: You';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare("う")}
            {this.renderSquare("し")}
            {this.renderSquare("た")}
          </div>
          <div className="board-row">
            {this.renderSquare("ぷ")}
            {this.renderSquare("に")}
            {this.renderSquare("き")}
          </div>
          <div className="board-row">
            {this.renderSquare("あ")}
            {this.renderSquare("く")}
            {this.renderSquare("ん")}
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
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  