import React from "react";
import { StoreContext } from "./AppWithContext";

const Counter = () => {
  return(
  <StoreContext.Consumer>
    {context => <button onClick={()=>context.counter()}>Add</button>}
  </StoreContext.Consumer>
  )
};

export default Counter;