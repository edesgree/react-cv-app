import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  }
}
