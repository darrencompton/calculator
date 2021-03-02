import React, { Component } from "react";
import Keypad from "./keypad/keypad";
import Screen from "./screens/screen";

class Calculator extends Component {
  state = {
    equation: "",
    result: 0,
  };
  eval(equationString) {
    var equationArray = equationString.split(" ");
    console.log(equationArray);
    var index;
    var deleteOperation = true;
    while (deleteOperation === true) {
      index = -99;
      for (let x = 0; x < equationArray.length; x++) {
        if (equationArray[x] === "" && x < equationArray.length - 2) {
          if (equationArray[x + 1] !== "-") {
            index = x - 1;
          }
        }
      }
      console.log(equationArray);
      if (index === -99) {
        deleteOperation = false;
      } else {
        console.log(index);
        equationArray.splice(index, 2);
      }
    }
    var result = 0.0;
    var lastOperator = "+";
    for (let x = 0; x < equationArray.length; x++) {
      if (["+", "-", "*", "/", "%"].indexOf(equationArray[x]) !== -1) {
        lastOperator = equationArray[x];
      } else if (equationArray[x] !== "") {
        if (lastOperator === "+") {
          result = result + parseFloat(equationArray[x]);
        }
        if (lastOperator === "-") {
          console.log(equationArray[x - 2]);
          if (["+", "-", "*", "/", "%"].indexOf(equationArray[x - 3]) !== -1) {
            if (equationArray[x - 3] === "+") {
              result = result + parseFloat(equationArray[x] * -1);
            }
            if (equationArray[x - 3] === "*") {
              console.log("muliply");
              result = result * parseFloat(equationArray[x] * -1);
            }
            if (equationArray[x - 3] === "/") {
              result = result / parseFloat(equationArray[x] * -1);
            }
            if (equationArray[x - 3] === "-") {
              result = result - parseFloat(equationArray[x] * -1);
            }
          } else {
            result = result - parseFloat(equationArray[x]);
          }
        }
        if (lastOperator === "*") {
          console.log(result, parseFloat(equationArray[x]), equationArray[x]);
          result = parseFloat(result) * parseFloat(equationArray[x]);
        }
        if (lastOperator === "/") {
          result = result / parseFloat(equationArray[x]);
        }
      }
    }
    console.log(equationArray, result);
    return result;
  }
  onButtonPress = (event, pressedButton) => {
    let equation = this.state.equation;
    if (pressedButton === "C") return this.clear();
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    )
      equation += pressedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1)
      equation += " " + pressedButton + " ";
    else if (pressedButton === "=") {
      try {
        const evalResult = this.eval(equation);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("Invalid Mathematical Equation" + error);
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }

    this.setState({ equation: equation });
  };
  clear() {
    this.setState({ equation: "", result: 0 });
  }

  render() {
    return (
      <div className="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <Keypad onButtonPress={this.onButtonPress} />
      </div>
    );
  }
}
export default Calculator;
