import React from "react";
import ComputeScreen from "./compute_screen/compute_screen";
import ResultScreen from "./result_screen/result_screen";

const Screen = (props) => {
  return (
    <section className="screen">
      <ResultScreen result={props.result} />
      <ComputeScreen equation={props.equation} />
    </section>
  );
};

export default Screen;
