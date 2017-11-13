import React from 'react';
import './App.css';
import Logo from './components/FishLogo.js';
import Wrapper from './components/Wrapper.js';

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