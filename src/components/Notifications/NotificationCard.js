import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Well, Panel} from 'react-bootstrap';

class NotificationCard extends Component {
  render() {
    const {name, type, events, email, text} = this.props;
    const classes = 'card-container';
    return (
      <Col xs={12} sm={6} md={4}>
        <Well className={classes}>
          <Panel className="card-panel">
            <h4>{name}</h4>
            <p>{type}</p>
            <p>{events}</p>
            <p>{email}</p>
            <p>{text}</p>
          </Panel>
          {this.props.children}
        </Well>
      </Col>
    );
  }
}

export default NotificationCard;
