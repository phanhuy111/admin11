import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Header from './component/Header';
import DashBoard from './component/DashBoard';
import ProductList from './component/ProductList';
import Map from './component/Map';
import Order from './component/Order';
import Review from './component/Review';


class App extends Component {
  render() {
    return (
  <div>
     <Header/>
    <Router>  
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/product" component={ProductList} />
        <Route path="/map" component={Map} />
        <Route path="/order" component={Order} />
        <Route path="/review" component={Review} />
      </Switch>
    </Router>
  </div>
    );
  }
}

export default App;
