import React, { Component } from "react";
import './Box.css'

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "purple" };
    this.handleClick = rhis.handkeClick.bind(this);
  }
  handleClick(){

  }
  render() {
    return (
      <div className="Box" style={{ backgroundColor: this.state.color } onClick=
      {this.handkeClick}}></div>
    );
  }
}

export default Box;
