import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Products from './components/Products/Products';
import axios from 'axios';
import Search from './components/Products/Search';
import './App.css';


class App extends Component {
  state = {
    products: [],
    loading:false
  }
  async componentDidMount(){
    this.setState({loading:true});
    const res = await axios.get(`http://localhost:8080/product/get`);
    //get(`https://fakestoreapi.com/products`);
  
    this.setState({products: res.data, loading:false});
  }

  searchProducts = async (text) =>{
    const res = await axios.get(`http://localhost:8080/product/get/byTitle?title=${text}`);
    this.setState({products: res.data, loading:false});
  }

 render(){
  return(
    <div className='App'>
      <Navbar />
      <div className="container">
        <Search searchProducts={this.searchProducts}/>
        <Products loading={this.state.loading} products={this.state.products} />
      </div>
    </div>
  );
 }
}

export default App;
