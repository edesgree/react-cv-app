import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputField from './InputField';
export default function Input(props) {
  return (
    <div className="is-flex is-align-items-center is-gap-5">
      <InputField
        value={props.inputValue}
        handleChange={props.handleChange}
        name={props.inputName}
        inputType={props.inputType}
      />
      <FontAwesomeIcon
        icon="fas fa-save"
        size="xs"
        color="rgb(147 30 140)"
        onClick={props.handleSave}
      />
    </div>
  );
}
