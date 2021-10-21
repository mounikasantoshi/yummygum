import React, { Component } from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

export default class Address extends Component {
  render() {
    return (
      <div
        className="leftcontent bg "
        // style={{ left: "-600px" }}
        style={{ left: this.props.selected !== "" ? "-500px" : "0px" }}
      >
        {this.props.selected && (
          <button className="closebtn" onClick={this.props.close}>
            <BsArrowRight />
          </button>
        )}
        <div className="leftspace">
          <h2 className="leftheader">We’re here</h2>
          <p className="p">Our door is always open for a good cup of coffee.</p>
          <h4 className="h4">Our Office</h4>
          <a
            className="ul"
            href="https://www.google.nl/maps/place/Yummygum/@52.3630633,4.8599017,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5e272ed95706f:0x8f1ed6ac331f06ed!8m2!3d52.3630633!4d4.8620904?hl=nl"
          >
            <p className=" link">Jacob Van Lennepkade 334-H</p>
            <p className=" link">NJ Amsterdam</p>
            <p className=" link">Nederland</p>
          </a>
          <div className="img">
            <a className="social twitter" href="https://twitter.com/yummygum">
              <FaTwitter />
            </a>
            <a className="social insta">
              <AiFillInstagram />
            </a>
            <a className="social mail">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
