import React, { Component } from "react";
// import { useHistory } from "react-router-dom";

export default class LetsTalk extends Component {
  render() {
    // console.log(this.props.pathName);
    return (
      <div>
        <div className="right">
          <h1 className="rightheader">Let's Talk</h1>
          <p>Share your Excitements with us.</p>
          <p className="mailright">info@yummygum.com</p>
          <h2 className="talkabout">Let's Talk About</h2>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio"
              value="yourgreatproject"
              id="yourgreatproject"
              checked={this.props.pathName === "yourgreatproject"}
              onChange={this.props.onchange}
            />
            <label class="form-check-label" for="yourgreatproject">
              Your great project
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio"
              value="meetingforcoffee"
              checked={this.props.pathName === "meetingforcoffee"}
              id="meetingforcoffee"
              onChange={this.props.onchange}
              // checked="true"
            />
            <label class="form-check-label" for="meetingforcoffee">
              Meeting for coffee
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio"
              value="birdsandbees"
              checked={this.props.pathName === "birdsandbees"}
              id="birdsandbees"
              onChange={this.props.onchange}
            />
            <label class="form-check-label" for="fbirdsandbees">
              Birds and bees
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="planavideocall"
              name="radio"
              checked={this.props.pathName === "planavideocall"}
              id="planavideocall"
              onChange={this.props.onchange}
              // checked
            />
            <label class="form-check-label" for="planavideocall">
              Plan a video call
            </label>
          </div>
          <button
            onClick={this.props.onselected}
            // onClick={() => useHistory.push("/" + this.props.pathName)}
            className="btn"
            type="button"
          >
            Next
          </button>
          {/* <button type="button" class="btn btn-info radius">
            Next
          </button> */}

          {/* <Route exact path="/" component={Videocall} /> */}
          {/* <Videocall /> */}
        </div>
      </div>
    );
  }
}
