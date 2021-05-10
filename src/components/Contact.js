import React, { Component } from "react";
import Address from "./Address";
import LetsTalk from "./LetsTalk";
import Videocall from "./Videocall";
import Demo from "./Demo";

export default class contact extends Component {
  state = {
    pathName: "",
    selected: "",
  };

  onchange = (e) => {
    this.setState({ pathName: e.target.value });
  };
  onselected = (e) => {
    this.setState({ selected: this.state.pathName });
  };

  close = () => {
    this.setState({ selected: "" });
  };

  render() {
    return (
      <div>
        <Address selected={this.state.selected} close={this.close} />
        <Demo
          onselected={this.onselected}
          selected={this.state.selected}
          pathName={this.state.pathName}
          onchange={this.onchange}
          close={this.close}
        />
      </div>
    );
  }
}
