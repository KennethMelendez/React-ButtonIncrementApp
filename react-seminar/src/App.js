import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    // Super allows us to use the keyword (this) in javascript
    super();
    this.state = {
      count: 0
    }; 
  }

  // we want to update the state the incremented count
  increment = () => {
      this.setState({ count : this.state.count + 1 });
  }

  render(){
    return (
          <div>
            <button onClick={this.increment}>Increment</button>
            {this.state.count}
          </div>);
  }
}

export default App;



