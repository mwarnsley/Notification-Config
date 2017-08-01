import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.active,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    const {toggleActive, active} = this.props;
    const id = e.target.id;
    this.setState({
      checked: !active
    });
    toggleActive(id);
  }
  render() {
    const {id} = this.props;
    const checked = this.state.checked;
    return (
      <label className="switch">
        <input id={id} type="checkbox" onChange={this.onInputChange} checked={checked}/>
        <span className="slider"></span>
      </label>
    );
  }
}

Toggle.propTypes = {
  /**
   * Number representing the ID for the checkbox
   */
  id: PropTypes.string.isRequired,
  /**
   * Function for toggling the active status of the notification
   */
  toggleActive: PropTypes.func,
};

export default Toggle;
