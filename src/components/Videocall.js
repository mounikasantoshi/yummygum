import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Videocall extends Component {
  state = {
    // data: {
    name: "",
    email: "",
    topic: "",
    error: {
      nameerror: "",
      emailerror: "",
      topicerror: "",
    },
    // errors: {
    //   name: "",
    //   email: "",
    //   topic: "",
    // },
  };

  onchange = (e) => {
    this.setState({
      //   data: { ...this.state.data,
      [e.target.name]: e.target.value,
      // },
    });
  };

  // validation = () => {
  //   // let nameerror = "";
  //   // let emailerror = "";
  //   // let topicerror = "";

  //   if (
  //     this.state.name == "" &&
  //     this.state.email == "" &&
  //     this.state.topic == ""
  //   ) {
  //     return this.setState({
  //       error: {
  //         nameerror: "required",
  //         emailerror: "required",
  //         topicerror: "required",
  //       },
  //     });
  //   }

  //   if (this.state.name == "") {
  //     //   nameerror = "required";
  //     return this.setState({ error: { nameerror: "required" } });
  //   }
  //   if (this.state.email == "") {
  //     return (
  //       //   emailerror = "required";
  //       this.setState({ error: { emailerror: "required" } })
  //     );
  //   } else if (this.state.email.includes("@")) {
  //     return (
  //       //   emailerror = "invalid email";
  //       this.setState({ error: { emailerror: "invalied email" } })
  //     );
  //   }
  //   if (this.state.topic == "") {
  //     return (
  //       //   topicerror = "required";
  //       this.setState({ error: { topicerror: "required" } })
  //     );
  //   }
  //   // if (nameerror || emailerror || topicerror) {
  //   //   this.setState({ emailerror, nameerror, topicerror });

  //   //}

  //   return true;
  // };

  validation = () => {
    // e.preventDefault();
    this.setState({
      error: {
        nameerror: this.state.name === "",
        emailerror: this.state.email === "",
        topicerror: this.state.topic === "",
      },
    });
    return (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.topic !== ""
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validation();
    if (isValid) {
      console.log(this.state);
      this.setState({
        name: "",
        email: "",
        topic: "",
      });
      this.setState({
        error: { nameerror: "", emailerror: "", topicerror: "" },
      });
    }
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
          <form onSubmit={this.handleSubmit}>
            <div className="grid">
              <div className="gridLeft">
                <input
                  className="input"
                  type="text"
                  placeholder="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onchange}
                />
                {this.state.error.nameerror ? (
                  <p className="required">required</p>
                ) : null}
                {/* <p className="error">
                  {this.state.name == "" ? "*please enter the field" : ""}
                </p> */}
                {/* <div> */}
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  name="email"
                  onChange={this.onchange}
                />
                {this.state.error.emailerror ? (
                  <p className="required">required</p>
                ) : null}

                {/* <p className="error">
                  {this.state.email == "" ? "*please enter the field" : ""}
                </p> */}
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
                {this.state.error.topicerror ? (
                  <p className="required">required</p>
                ) : null}
                {/* <p className="error">
                  {this.state.topic == "" ? "*please enter the field" : ""}
                </p> */}
                {this.state.name && this.state.email && this.state.topic ? (
                  <Link to="/Success">
                    <button
                      type="submit"
                      class="btn btn-info radius"

                      //   onSubmit={this.handleSubmit}
                      // onClick={this.props.close}
                    >
                      Send Inquiry
                    </button>
                  </Link>
                ) : (
                  <button
                    type="submit"
                    class="btn btn-info radius"
                    // to="/Success"

                    // onSubmit={this.handleSubmit}
                  >
                    Send Inquiry
                  </button>
                )}
              </div>
            </div>
          </form>
          {/* <Link to="/Contact" className="btn radius" type="button">
          Send Inquiry
        </Link> */}
        </div>
      </div>
    );
  }
}
