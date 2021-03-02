import React from "react";

const LargeButton = (props) => {
  return (
    <button
      className="btn--large"
      onClick={(event) => props.onButtonPress(event, props.label)}
    >
      {props.label}
    </button>
  );
};

export default LargeButton;
