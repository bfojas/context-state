import React, { useContext } from "react";
import { StoreContext } from "./AppWithContext";

const Count = props => {
  const context = useContext(StoreContext);
  return <div>count: {context.count}</div>;
};


export default Count;
