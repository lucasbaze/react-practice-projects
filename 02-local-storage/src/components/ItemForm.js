import React from 'react';
import CheckAll from './CheckAll.js';
import UncheckAll from './UncheckAll.js';
import FoodItems from './FoodItems.js';

class ItemForm extends React.Component {
  constructor(props){
    super(props);
    //These were created to so that I can set the value of the input and price
    //foodItems will hold all of the foodItems input from the form
    this.state = {
      value: '',
      price: 0,
      foodItems: []
    }
    //all this stupid binding
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.unCheckAll = this.unCheckAll.bind(this);
    this.updateToggle = this.updateToggle.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }

  handleChange(e){
    //handle the change of the text input
    this.setState({value: e.target.value});
  }

  handlePriceChange(e){
    //handle the change of the price input
  	this.setState({price: e.target.value});
  }

  handleSubmit(e){
    //don't let the form reload the page
    e.preventDefault();
    //create a fooditem based on the entry fields and the state
    let fooditem = {
      foodName: this.state.value,
      checked: false,
      price: this.state.price
    };
    //add the item to the array
    this.state.foodItems.push(fooditem);
    //set the state and reset the input form
    this.setState({foodItems: this.state.foodItems, value: '', price: ''});
  }

  checkAll(){
    //map over the food items and change all the checked values
    let checkedItems = this.state.foodItems.map(food => {
      food.checked = true;
      return food;
    });

    this.setState({foodItems: checkedItems});
  
  }

  unCheckAll(){
    //map over the food items and uncheck all the food item values
    let unCheckedItems = this.state.foodItems.map(food => {
      food.checked = false;
      return food;
    });

    this.setState({foodItems: unCheckedItems});
  }

  updateToggle(element){
    //set index to the data-index value
    const index = Number(element.target.dataset.index);
    //map ove the array and find the element with the same index value and change that bitch to the opposite
    let updatedItem = this.state.foodItems.map((food, i) => {
        if(index == i){
         food.checked = !food.checked;
         return food;
       } else {
        return food;
      }
    })
    //Update the state
    this.setState({foodItems: updatedItem});
  }

  removeListItem(element){
    //set the data-index to index
  	const index = Number(element.target.dataset.index);
  	//create a new array from state
    let updateFoodItems = this.state.foodItems;
    //remove the item from the new array
  	updateFoodItems.splice(index, 1);
    //update the state with the new spliced arrary
  	this.setState({foodItems: updateFoodItems})
  }

  render(){
    //My shitty styling
  	const ulStyle = {
  		margin: 0,
  		padding: 0,
  		textAlign: "left",
  		listStyle: "none"
  	}

  	const inputStyle = {
  		border: '1px solid grey',
  		borderRadius: 5,
  		padding: "10px 20px",
  		textAlign: 'center',
  		textDecoration: 'none',
  		display: 'block',
  		fontSize: 16
  	}

  	const submitStyle = {
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: "10px 20px",
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: 16
	}

    //I feel like you can read this stuff hear and figure it out... I pass a lot of shit around, so I definitely could improve up somewhere
    return (
      <div>
        <ul style={ulStyle}>
          <FoodItems items={this.state.foodItems} onClick={this.updateToggle} removeButton={this.removeListItem}/>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input style={inputStyle} type="text" name="item" placeholder="Item name" value={this.state.value} onChange={this.handleChange} required />
          <input style={inputStyle} type="number" name="price" placeholder="Item price" value={this.state.price} onChange={this.handlePriceChange} required/>
          <input style={submitStyle} type="submit" name="add-item" value="+ Add Item" />
        </form>
        <CheckAll onClick={this.checkAll}/>
        <UncheckAll onClick={this.unCheckAll}/>
      </div>
      )
  }
}

export default ItemForm;