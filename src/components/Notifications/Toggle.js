import React, {Component} from 'react';

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
    // <label data-on="ON" data-off="OFF" className="toggleSwitch">
    //   <input type="checkbox" data-value={id} onChange={this.onInputChange} checked={checked}/>
    //   <span className="knob"></span>
    // </label>
    return (
      <div className="check-container">
        <input type="checkbox" id="box" className="blaubarry" />
        <label htmlFor="box"></label>
      </div>
    );
  }
}

export default Toggle;
