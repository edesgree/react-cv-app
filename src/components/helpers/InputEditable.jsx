import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputField from './InputField';
import Button from './Button';

export default function InputEditable(props) {
  return (
    <div className="field has-addons">
      {props.inputType === 'url' && (
        <p className="control">
          <a className="button is-small is-static">http://</a>
        </p>
      )}
      <div className="control">
        <InputField
          value={props.inputValue}
          handleChange={props.handleChange}
          name={props.inputName}
          inputType={props.inputType}
        />
      </div>
      <div className="control">
        <Button
          name="save"
          action={props.handleSave}
          iconSize="xs"
          iconSymbol="fa-save"
          text=""
        />
      </div>
    </div>
  );
}
