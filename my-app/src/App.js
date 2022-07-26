import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Creet";
import Welcome from "./components/welcome";
import Hllow from "./components/hllow";
import Messagez from "./components/message";
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/userGreeting';
import NameList from './components/nameList';
import StyleSheet from './components/styleSheet';
import Inline from './components/inline';

import './appStyle.css';
import Styles from './appStyle.module.css';
import Form from './components/form';









class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Greet name = "Bruce" heroName="Batman">
        <p>This is children Propertics</p>
      </Greet>
     x
      <Greet name = "Kishor" heroName = "Begineer"/>
      // 
      <Welcome  name = "Bruce" heroName="Batman" />
      <Welcome name = "Diana" heroName ="Wander Women"/>
      <Welcome name = "Kishor" heroName = "Begineer"/> */}
      {/* <Messagez />
      <Counter></Counter> */}
     
      {/* <Greet  name="Viswas" heroName="Tutor"/>
      <Welcome  name="Diana" heroName ="Wander Women hero"/> */}
      {/* <ClassClick></ClassClick> */}
      
{/* 
      
        
        <Hllow/> */}
        {/* <Welcome /> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <EventBind></EventBind> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/>
        <NameList></NameList>
        <StyleSheet primary={true} /> 
        <Inline></Inline>
        <h1 className='error' >Error</h1>
        <h1 className={Styles.success}>Success</h1> */}
        <Form></Form>
      </div>
    );
  }
}

export default App;
