import React, { useState } from "react";
export const StoreContext = React.createContext();

const AppWithContext = props => {
  const [hello] = useState("Hello From a");
  const [count, setCount] = useState(0);
  const counter = () => setCount(count + 1);

  const state = { hello, count, counter };

  return (
    <StoreContext.Provider value={state}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default AppWithContext;
