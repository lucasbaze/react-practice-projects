import React from 'react';
import ItemForm from './ItemForm.js';

//Will hold the menu items, header, and inner items
class Wrapper extends React.Component {
  render(){

    const style = {
      padding: 20,
      maxWidth: 350,
      background: "rgba(255,255,255,0.95)",
      boxShadow: "0 0 0 10px rgba(0,0,0,0.1)"
    }

    return (
      <div style={style}>
        <h2>Tapas Menu</h2>
        <ItemForm />
      </div>
      )
  }
}

export default Wrapper;