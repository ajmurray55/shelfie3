import React, {Component} from 'react'
// import axios from 'axios'

class Form extends Component{
    constructor(){
        super()
        this.state = { 
            name:"",
            price:0,
            imageUrl:""

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    resetChange = (e) => {
        this.setState({
            name:"",
            price: 0,
            imageUrl:""
        })
    }
    render(){
        const {name, price, imageUrl} = this.state
        return(
            <div>
                <h3>Image URL:</h3>
                <input name='imageUrl' value={imageUrl} onChange = {this.handleChange}/>
                <h3>Product Name:</h3>
                <input name='name'value={name} onChange = {this.handleChange}/>
                <h3>Price:</h3>
                <input name='price' value={price} onChange = {this.handleChange}/>
        <button onClick={this.resetChange}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}
export default Form