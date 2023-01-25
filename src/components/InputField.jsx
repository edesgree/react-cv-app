import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input(props) {
  return (
    <input
      value={props.value}
      onChange={props.handleChange}
      name={props.name}
      type={props.type}
    />
  );
}
