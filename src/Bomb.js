import React from 'react';


export default class Bomb extends React.Component
{
  constructor(){
    super();
    this.state = {
      secondsLeft:0
    }
  }
  render(){
    return(<div>{"I am on slide " + this.state.currentSlideIndex}</div>);
  }
}
