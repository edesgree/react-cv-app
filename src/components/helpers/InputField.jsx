import React from 'react';

export default function Input(props) {
  if (props.inputType === 'text') {
    return (
      <input
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        type={props.inputType}
      />
    );
  } else if (props.inputType === 'textarea') {
    return (
      <textarea
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        rows="4"
        cols="50"
      />
    );
  } else {
    return 'input has no type';
  }
}
