import React, { useContext } from "react";
import { StoreContext } from "./AppWithContext";

const Counter = () => {
  const context = useContext(StoreContext);
  return <button onClick={()=>context.counter()}>Add</button>;
};

export default Counter;