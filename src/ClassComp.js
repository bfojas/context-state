import React, { Component } from "react";
import { StoreContext } from "./AppWithContext";

class App extends Component {
    static contextType = StoreContext;
  
    render() {
      return (
        <div>
            {this.context.hello} Class Component
        </div>
      );
    }
  }
  
  export default App;