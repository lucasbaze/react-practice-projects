import React from 'react';

class CheckAll extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClick();
  }

  render(){

    return (<input type="button" value="Check All" onClick={this.handleClick} />)
  }
}

export default CheckAll;