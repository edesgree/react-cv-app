import React from 'react';

export default function InputField(props) {
  console.log('props.inputType', props.inputType);
  console.log('props.inputname', props.name);
  return props.inputType === 'textarea' ? (
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
  ) : props.inputType === 'text' ||
    props.inputType === 'date' ||
    props.inputType === 'email' ||
    props.inputType === 'tel' ||
    props.inputType === 'url' ? (
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
  ) : (
    'input has no type'
  );
}
