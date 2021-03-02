import { Component } from "react";
import Calculator from "./layouts/Calculator";
import "./styles/styles.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}
export default App;
