import React from 'react';

export default function InputField(props) {
  return props.inputType === 'textarea' ? (
    <textarea
      value={props.value}
      onChange={props.handleChange}
      name={props.name}
      rows="4"
      cols="50"
      placeholder={props.placeholder}
      className="textarea is-small"
    />
  ) : props.inputType === 'text' ||
    props.inputType === 'date' ||
    props.inputType === 'email' ||
    props.inputType === 'tel' ||
    props.inputType === 'url' ? (
    <input
      value={props.value}
      onChange={props.handleChange}
      name={props.name}
      type={props.inputType}
      className="input is-small"
      placeholder={props.placeholder}
    />
  ) : (
    'input has no type'
  );
}
