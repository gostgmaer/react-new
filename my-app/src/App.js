import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Creet";
import Welcome from "./components/welcome";
import Hllow from "./components/hllow";
import Messagez from "./components/message";
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Greet name = "Bruce" heroName="Batman">
        <p>This is children Propertics</p>
      </Greet>
      <Greet name = "Diana" heroName ="Wander Women"/>
      <Greet name = "Kishor" heroName = "Begineer"/>
      <Greet name = "Viswas" heroName= "Tutor"/>
      <Welcome  name = "Bruce" heroName="Batman" />
      <Welcome name = "Diana" heroName ="Wander Women"/>
      <Welcome name = "Kishor" heroName = "Begineer"/> */}
      <Messagez />
{/* 
      <Welcome />
        
        <Hllow/> */}
      </div>
    );
  }
}

export default App;
