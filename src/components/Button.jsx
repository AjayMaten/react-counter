import React from "react";
import "./Button.css";

function Button(props) {
  return <button onClick={props.handleClick}>{props.content}</button>;
}

export default Button;
