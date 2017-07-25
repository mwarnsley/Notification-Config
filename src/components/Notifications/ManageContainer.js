import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Modal, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router';
// Import Components needed
import NotificationCard from './NotificationCard';
import Toggle from './Toggle';
// Import Actions from redux
import {deleteNotification} from '../../actions/notificationActions';

class ManageContainer extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      id: ''
    };

    this.close = this.close.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
  }
  open(id) {
    this.setState({
      showModal: true,
      id: id
    });
  }
  close() {
    this.setState({
      showModal: false,
    });
  }
  deleteNotification() {
    const {dispatch} = this.props;
    const deleteId = this.state.id;
    dispatch(deleteNotification(deleteId));
    this.setState({
      showModal: false,
    });
  }
  render() {
    const {notifications} = this.props;
    const notificationList = notifications.map((notification, index) => {
      const events = notification.events.map((item, i) => {
        return ` ${item}`;
      });
      return (
        <div key={index}>
          <NotificationCard
            name={`Order: ${notification.name}`}
            type={`type: ${notification.type}`}
            events={`events: ${events}`}
            email={`email: ${notification.email}`}
            text={`text: ${notification.text}`}>
            <Row>
              <Col xs={12} sm={4}>
                <Link
                  className="btn btn-sm edit-btn"
                  href={`/edit/${notification.name}`}>
                  Edit
                </Link>
              </Col>
              <Col xs={12} sm={4}>
                <Button
                  onClick={() => this.open(notification._id)}
                  bsStyle="danger"
                  bsSize="small">
                    Delete
                </Button>
              </Col>
              <Col xs={12} sm={4}>
                <Toggle id={notification.name}/>
              </Col>
            </Row>
          </NotificationCard>
        </div>
      );
    });
    return (
      <Grid>
        <Row>
          <div className="manage-container">
            <div className="manage-title-container">
              <h1>Manage Notifications</h1>
              <Link className="create-link" href="/create">
                <span className="create-container">
                  <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                  Create Notification
                </span>
              </Link>
            </div>
            <div className="clearfix"></div>
            <p>Please select which notification you would like to manage. You can turn notifications on/off or edit the notifications from this screen</p>
            <Row>
              {notificationList}
            </Row>
          </div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>Are you sure you want to delete this notifcation?</h6>
              <p>Once you delete this notification, you will have to create it again to turn it on.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="danger" onClick={this.deleteNotification}>Delete</Button>
              <Button onClick={this.close}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Grid>
    );
  }
}

export default connect(state => ({
  notifications: state.notifications.notifications
}))(ManageContainer);
