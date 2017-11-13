import React from 'react';
import CheckAll from './CheckAll.js';
import UncheckAll from './UncheckAll.js';
import FoodItems from './FoodItems.js';

class ItemForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      price: 0,
      foodItems: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.unCheckAll = this.unCheckAll.bind(this);
    this.updateToggle = this.updateToggle.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handlePriceChange(e){
  	this.setState({price: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let fooditem = {
      foodName: this.state.value,
      checked: false,
      price: this.state.price
    };
    this.state.foodItems.push(fooditem);
    console.log(this.state.foodItems);
    this.setState({foodItems: this.state.foodItems, value: '', price: ''});
  }

  checkAll(){
    let checkedItems = this.state.foodItems.map(food => {
      food.checked = true;
      return food;
    });

    this.setState({foodItems: checkedItems});
  
  }

  unCheckAll(){
    let unCheckedItems = this.state.foodItems.map(food => {
      food.checked = false;
      return food;
    });

    this.setState({foodItems: unCheckedItems});
  }

  updateToggle(element){
    const index = Number(element.target.dataset.index);
    let updatedItem = this.state.foodItems.map((food, i) => {
        if(index == i){
         food.checked = !food.checked;
         return food;
       } else {
        return food;
      }
    })
    console.log(updatedItem);

    this.setState({foodItems: updatedItem});
  }

  removeListItem(element){
  	const index = Number(element.target.dataset.index);
  	let updateFoodItems = this.state.foodItems;
  	updateFoodItems.splice(index, 1);
  	this.setState({foodItems: updateFoodItems})
  }

  render(){

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