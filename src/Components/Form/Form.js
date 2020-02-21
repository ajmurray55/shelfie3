import React, { Component } from "react";
// import axios from 'axios'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imageurl: "",
      edit: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  resetChange = e => {
    this.setState({
      name: "",
      price: 0,
      imageurl: ""
    });
  };
  addProduct = () => {
    const { name, price, imageurl } = this.state;
    let newProduct = {
      name,
      price,
      imageurl
    };
    this.props.addProduct(newProduct);
    this.setState({
      name: "",
      price: 0,
      imageurl: ""
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { name, price, imageurl } = prevState;

    if (name !== this.state.name) {
      console.log("updated successful");
      // return name
    } else if (price !== this.state.price) {
      console.log("updated successful");
      // return price
    } else if (imageurl !== this.state.imageurl) {
      console.log("updated successful");
      // return imageurl
    }
  }

  render() {
    console.log("imageurl", this.state.imageurl);
    const { name, price, imageurl } = this.state;
    return (
      <div>
        <h3>Image URL:</h3>
        <input name="imageurl" value={imageurl} onChange={this.handleChange} />
        <h3>Product Name:</h3>
        <input name="name" value={name} onChange={this.handleChange} />
        <h3>Price:</h3>
        <input name="price" value={price} onChange={this.handleChange} />
        <button onClick={this.resetChange}>Cancel</button>
        {this.state.edit ? (
          <button onClick={this.addProduct}>Add to Inventory</button>
        ) : (
          <button onClick={this.addProduct}>Save Changes</button>
        )}
      </div>
    );
  }
}
export default Form;
