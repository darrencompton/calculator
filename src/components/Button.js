import React from "react";

const Button = (props) => {
  return (
    <button
      className="btn"
      onClick={(event) => props.onButtonPress(event, props.label)}
    >
      {props.label}
    </button>
  );
};

export default Button;
