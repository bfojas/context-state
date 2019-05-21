import React, { Component } from "react";
export const StoreContext = React.createContext();

class AppWithContext extends Component {
  state = {
      hello: "Hello from a ",
      count: 0,
      counter: ()=> {
        console.log('click')  
        this.setState({count: this.state.count+1})}
}
  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
export default AppWithContext