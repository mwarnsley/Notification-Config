import React, {Component} from 'react';

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

export default Input;
