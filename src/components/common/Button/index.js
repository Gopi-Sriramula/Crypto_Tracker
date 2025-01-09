import React from "react";
import "./style.css";
function Button({ text, name }) {
  return <button className={`btn ${name}`}>{text}</button>;
}

export default Button;
