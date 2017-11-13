import React from 'react';


class UncheckAll extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClick();
  }

  render(){
    return (<input type="button" value="Uncheck All" onClick={this.handleClick} />)
  }
}

export default UncheckAll;