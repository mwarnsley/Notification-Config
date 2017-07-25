import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Well, Panel} from 'react-bootstrap';

class CreateCard extends Component {
  render() {
    const {title} = this.props;
    return (
      <Col xs={12} sm={6} md={4}>
        <Well className="card-container">
          <Panel className="card-panel">
            <h3 className="create-card-title">{title}</h3>
            {this.props.children}
          </Panel>
        </Well>
      </Col>
    );
  }
}

export default connect(state => ({

}))(CreateCard);
