import React from 'react';


export default class Bomb extends React.Component
{
  static
  constructor(props){
    super();
    this.state = {
      secondsLeft:this.props.initialCount
    }
  }
  render(){
    return(<div>{"I am on slide " + this.state.currentSlideIndex}</div>);
  }
}
