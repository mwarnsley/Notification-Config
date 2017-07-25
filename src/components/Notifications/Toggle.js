import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      checked: true,
      checkedValue: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    const value = e.target.dataset.value;
    this.setState({
      checked: !this.state.checked,
      checkedValue: value
    });
  }
  render() {
    const {id} = this.props;
    const checked = this.state.checked;
    return (
      <label className="switch">
        <input type="checkbox" onChange={e => this.onInputChange(e)} checked={checked}/>
        <span className="slider"></span>
      </label>
    );
  }
}

Toggle.propTypes = {
  /**
   * Number representing the ID for the checkbox
   */
  id: PropTypes.number,
};

export default Toggle;
