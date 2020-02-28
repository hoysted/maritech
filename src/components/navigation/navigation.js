import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './navigation.css';

class Navigation extends Component {
  render() {
    const { navItems } = this.props;
    
    return (
    <React.Fragment>
    <nav>
      <ul>
        {navItems.map((item, index) => {return(<li key={index}><Link to={item.path} key={index}>{item.name}</Link></li>)})}     
      </ul>    
    </nav>
    </React.Fragment>
    )
  }
};

export default Navigation;
