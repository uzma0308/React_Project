import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

 render() {

  var user={
   hobbies:["Star","Moon","Sun"]
  };
  var text="nxz";
    return (
      <div>
      <p>Hello {user.hobbies}</p>
      {user.hobbies.map((hobby,i)=>
        <li key={i}>{hobby}</li>)}
      </div>
    );
  }
}

export default App;
