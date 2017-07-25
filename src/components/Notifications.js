import React, {Component} from 'react';
import {connect} from 'react-redux';

import Menu from './Menu';
import Footer from './Footer';

class Notifications extends Component {
  render() {
    return (
      <div id="notification-app-container">
        <Menu/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Notifications;
