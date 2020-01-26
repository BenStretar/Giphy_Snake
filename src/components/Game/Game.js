import React, { Component } from 'react';
import {connect} from 'react-redux';
import Snake from './Snake';
import Item from './Item'; //change to Item from ./Item
import './Game.css'

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2; //random number between the min and the max for X
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2; //random number between the min and the max for Y
  return [x,y]
}

const initialState = {
  item: getRandomCoordinates(),
  speed: 200,
  // direction: 'RIGHT', // starting direction
  snakeDots: [
    [0,0], // starting position (top left)
    // [2,0] 
  ],
  score: 0,
  elapsedTime: 0,
}

class App extends Component {

  state = initialState;

  componentDidMount(){
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate(){
    this.checkIfOutOfBorders()
    this.checkIfCollapsed()
    this.checkIfEat()
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
        default:
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length -1];

    switch (this.state.direction){
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
        default:
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length -1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed(){
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length -1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]){
        this.onGameOver();
      }
    })
  }


  checkIfEat(){
    let head = this.state.snakeDots[this.state.snakeDots.length -1]
    let item = this.state.item;
    if (head[0] === item[0] && head[1] === item[1]){
      this.setState({
        item: getRandomCoordinates(),
        score: this.state.score + 1
      })
      this.enlargeSnake();
      this.increaseSpeed();
      //console.log('collected')
    }
  }

  enlargeSnake(){
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }


  increaseSpeed(){
    if (this.state.speed > 10){
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  onGameOver(){
    alert(`Game Over. You collected ${this.state.score} item(s)`);
    this.setState(initialState)
    this.props.history.push('/') // takes the user home after gameover
    this.props.dispatch({type: 'SET_SCORE'})
  }

  render(){
    return(
      <>
      <h1 className="header">Giphy_Snake</h1>
      <h3 className="score">
        Length: {this.state.snakeDots.length} <br />
        Items Collected: {this.state.score}
      </h3>
    <div className="game-area">
      <Snake snakeDots={this.state.snakeDots} />  {/* <Item />*/}
      <Item dot={this.state.item} /> 
    </div>
    </>
    );
  }
}

export default connect()(App);
