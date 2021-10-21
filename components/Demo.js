import React from "react";
import BirdsandBees from "./BirdsandBees";
import LetsTalk from "./LetsTalk";
import Meeting from "./Meeting";
// import { PlanVideoCall } from "./PlanVideoCall";
import Project from "./Project";
import Videocall from "./Videocall";

export default function Demo({
  selected,
  close,
  onselected,
  onchange,
  pathName,
}) {
  return (
    <div
      className="rightcontent"
      style={{
        left: selected ? "175px" : "675px",
        width: selected ? "87%" : "50%",
      }}
    >
      {selected === "" ? (
        <LetsTalk
          onselected={onselected}
          selected={selected}
          onchange={onchange}
          pathName={pathName}
        />
      ) : selected === "planavideocall" ? (
        <Videocall close={close} />
      ) : selected === "birdsandbees" ? (
        <BirdsandBees />
      ) : selected === "meetingforcoffee" ? (
        <Meeting />
      ) : (
        <Project />
      )}
    </div>
  );
}
