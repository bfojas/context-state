import React, { Component } from "react";
import { StoreContext } from "./AppWithContext";
import Functional from "./Functional";
import ClassComp from "./ClassComp";
import Count from "./Count";
import Counter from "./Counter";

class App extends Component {
  static contextType = StoreContext;
  render() {
    return (
      <div>
        <Functional />
        <ClassComp />
        <Count />
        <Counter />
      </div>
    );
  }
}

export default App;
