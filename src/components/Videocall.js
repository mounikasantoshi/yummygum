import React, { Component } from "react";
// import { ImVideoCamera } from "react-icons/im";

export default class Videocall extends Component {
  state = {
    name: "",
    email: "",
    topic: "",
  };
  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="video videocall">
        <div className="leftspace">
          {/* <button className="closebtn" onClick={this.props.close}>
            X
          </button> */}
          <h1 className="call">
            Let's plan a video call!🎥
            {/* <p className="icon">
              <ImVideoCamera />
            </p> */}
          </h1>
          <h4 className="personal ">Personal details</h4>
          <div className="grid">
            <div className="gridLeft">
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onchange}
              />

              {/* <div> */}
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.onchange}
              />
            </div>
            <div className="gridRight">
              <textarea
                type="text"
                className="input textarea"
                placeholder="What do you want to talk about"
                value={this.state.topic}
                name="topic"
                onChange={this.onchange}
              />
              <button
                type="button"
                class="btn btn-info radius"
                onClick={this.props.close}
              >
                Send Inquiry
              </button>
            </div>
          </div>
          {/* <Link to="/Contact" className="btn radius" type="button">
          Send Inquiry
        </Link> */}
        </div>
      </div>
    );
  }
}
