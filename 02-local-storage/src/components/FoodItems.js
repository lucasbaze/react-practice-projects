import React from 'react';


//This takes the FoodItems and outputs the corresponding DOM to populate the current Tapas list
class FoodItems extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }

  handleClick(key){
    if(!key.target.matches('input')) return;
    this.props.onClick(key);
  }

  removeListItem(key){
    this.props.removeButton(key);
  }

  render(){

    const liStyle = {
      borderBottom: "1px solid rgba(0,0,0,0.2)",
      padding: "10px 0px",
      fontWeight: 100,
      display: "flex",
      backgroundColor: 'yellow'
    }
    
    var fooditems = this.props.items.map((food, i) => {
      
      let isChecked = food.checked ? 'checked' : '';
      return (
          <li style={liStyle} key={i}>
            <input type="checkbox" id={`item${i}`} data-index={i} checked={isChecked} onClick={this.handleClick}/>
            <label htmlFor={`item${i}`} onClick={this.handleClick}>{food.foodName}</label>
            <label htmlFor={`item${i}`}>{food.price}</label>
            <input type="button" id={`item${i}`} data-index={i} value="x" onClick={this.removeListItem}/>
          </li>
      )
    })

    return fooditems;
  }
}

export default FoodItems; 

/*
FoodItems.propTypes = {
  items: PropType.object,
}
*/
