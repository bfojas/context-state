import React, { Component } from "react";
import Functional from "./Functional";
import ClassComp from "./ClassComp";
import Count from "./Count";
import Counter from "./Counter";
import { StoreContext } from "./AppWithContext";

const App = () => {
  return (
    <div>
      <Functional />
      <ClassComp />

      {/* context as a prop from consumer*/}
      <StoreContext.Consumer>
        {context => <Count {...context} />}
      </StoreContext.Consumer>

      {/* uses context consumer */}
      <Counter />
    </div>
  );
};

export default App;
