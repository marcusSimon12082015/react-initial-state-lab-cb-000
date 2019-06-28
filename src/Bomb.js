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
    return(<div>{this.state.secondsLeft === 0 ? 'Boom!' : {this.state.secondsLeft} + ' seconds left before I go boom!'}</div>);
  }
}
