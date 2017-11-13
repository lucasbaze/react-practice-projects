import React from 'react';
import PropTypes from 'prop-types';

//This checks all of the list items with a positive element
class CheckAll extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    //This is a function passed down from ItemForm
    this.props.onClick();
  }

  render(){

    return (<input type="button" value="Check All" onClick={this.handleClick} />)
  }
}

export default CheckAll;


//Make sure the props included are functions
CheckAll.propTypes = {
  onClick: PropTypes.func
}