import React, { Component } from "react";
import Functional from "./Functional";
import ClassComp from "./ClassComp";
import Count from "./Count";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Functional  />
        <ClassComp />
        <Count />
        <Counter />
      </div>
    );
  }
}

export default App;
