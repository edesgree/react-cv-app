import React from 'react';

export default function Input(props) {
  if (props.inputType === 'text') {
    return (
      <input
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        type={props.inputType}
        className="input is-small"
      />
    );
  } else if (props.inputType === 'textarea') {
    return (
      <div>
        <textarea
          value={props.value}
          onChange={props.handleChange}
          name={props.name}
          rows="4"
          cols="50"
        />
      </div>
    );
  } else {
    return 'input has no type';
  }
}
