import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }
  componentDidMount(){
    console.log('hit')
    axios.get('/api/inventory').then(res => {
      console.log(res.data)
      this.setState({
        inventory: res.data
      }) 
    }).catch(err => console.log(err))
  }
  addProduct = (product) => {
    axios.post('/api/product', product).then( res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  deleteProduct = (id) =>
  axios.delete(`api/product/${id}`).then(res =>
    this.setState({
      inventory: res.data
    }))

  render(){
    console.log("state of inventory",this.state.inventory)
    return (
    <div className="App">
      <Header/>
      <Dashboard inventory = {this.state.inventory} deleteProduct={this.deleteProduct}/>
      <Form addProduct={this.addProduct} />
      
    </div>
  );
  }
}

export default App;
