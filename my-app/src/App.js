import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Creet";
import Welcome from "./components/welcome";
import Hllow from "./components/hllow";
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Greet/>

      <Welcome /> */}
        
        <Hllow/>
      </div>
    );
  }
}

export default App;
