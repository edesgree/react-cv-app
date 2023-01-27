import React from 'react';

export default function Input(props) {
  if (props.inputType === 'text' || 'date') {
    return (
      <div className="control">
        <input
          value={props.value}
          onChange={props.handleChange}
          name={props.name}
          type={props.inputType}
          className="input is-small"
          placeholder={props.placeholder}
        />
      </div>
    );
  } else if (props.inputType === 'textarea') {
    return (
      <div className="control">
        <textarea
          value={props.value}
          onChange={props.handleChange}
          name={props.name}
          rows="4"
          cols="50"
          placeholder={props.placeholder}
          className="textarea is-small"
        />
      </div>
    );
  } else {
    return 'input has no type';
  }
}
