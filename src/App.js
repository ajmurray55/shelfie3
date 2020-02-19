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
    axios.get('/api/inventory').then(res => {
      console.log(res.data)
      this.setState({
        inventory: res.data
      }) 
    })
  }


  render(){
    return (
    <div className="App">
      <Header/>
      <Dashboard inventory = {this.state.inventory}/>
      <Form/>
      

    </div>
  );
  }
}

export default App;
