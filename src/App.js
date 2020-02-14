import React, { Component } from 'react';

class App extends Component {
  componentDidMount()
  {
    setTimeout(()=>{
      this.setState({})
    },500)
  } 
  render() {
    console.warn("red")
    return (
      <div>
        some data
      </div>
    );
  }
}

export default App;