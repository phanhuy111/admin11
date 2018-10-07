import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";


class Header extends Component {
  render() {
    return (
       <div> 
        <div className="header">
          <a href="#" id="menu-action">
            <i className="fa fa-bars" />
            <span>Close</span>
          </a>
          <div className="logo">
            Admin PHAN JR SHOP
          </div>
        </div>
        
        <div className="sidebar">
          <Router>
            <ul>
            <li><a href="/"><i className="fa fa-desktop"/><span>DashBoard</span></a></li>
            <li><a href="/product"><i className="fa fa-server"/><span>ProductList</span></a></li>
            <li><a href="/order"><i className="fa fa-calendar"/><span>OrderPage</span></a></li>
            <li><a href="/review"><i className="fa fa-envelope-o"/><span>Review</span></a></li>
            <li><a href="/map"><i className="fa fa-table"/><span>Map</span></a></li>        
          </ul>
          </Router>
        </div>
      
    </div>
    );
  }
}

export default Header;


