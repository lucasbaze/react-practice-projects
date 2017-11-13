import React from 'react';
import './App.css';
import Logo from './components/FishLogo.js';
import Wrapper from './components/Wrapper.js';


// This is just the Logo and Wrapper wrapped into App and sent to index.js
class App extends React.Component {
  render(){
    return (
      <div>
        <Logo /> 
        <Wrapper />
      </div>
      )
  };
};

export default App;