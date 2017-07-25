import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      classes,
      id,
      autofocus,
      checked,
      disabled,
      name,
      placeholder,
      type,
      value,
      onChange} = this.props;
    return (
      <input
        className={classes}
        id={id}
        autoFocus={autofocus}
        checked={checked}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    );
  }
}

Input.propTypes = {
  /**
   * String Value of classes to style input
   */
  classes: PropTypes.string,
  /**
   * String value for the id to style the input if need be
   */
  id: PropTypes.string,
  /**
   * Boolean determining whether to auto focus or not
   */
  autofocus: PropTypes.bool,
  /**
   * Boolean determining whether or not the input is checked
   */
  checked: PropTypes.bool,
  /**
   * Boolean determining whether or not the input is disabled
   */
  disabled: PropTypes.bool,
  /**
   * String name value for the input
   */
  name: PropTypes.string,
  /**
   * String placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * String type of input being used
   */
  type: PropTypes.string,
  /**
   * String default value for the input
   */
  value: PropTypes.string,
  /**
   * Function determining what to do on change of the input value
   */
  onChange: PropTypes.func,
};

export default Input;
