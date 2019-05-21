import React, { useContext } from "react";
import { StoreContext } from "./AppWithContext";

const MyComponent = () => {
  const context = useContext(StoreContext);
  return <div>{context.hello} Functional Component</div>;
};

export default MyComponent;
