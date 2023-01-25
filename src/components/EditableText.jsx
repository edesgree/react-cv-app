import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputEditable from './InputEditable';
export default function EditableText(props) {
  return (
    <div className="action-wrap">
      {props.currentEdit === props.editableName ? (
        <InputEditable
          inputValue={props.editableTextContent}
          handleChange={props.handleChange}
          inputName={props.editableName}
          inputType={props.inputType}
          handleSave={props.editableHandleSave}
        />
      ) : (
        <span className="is-flex is-align-items-center is-gap-5">
          {props.editableTextContent}
          <FontAwesomeIcon
            className="action action-save"
            icon="fa-solid fa-pen-to-square"
            size="xs"
            color="rgb(147 30 140)"
            onClick={() => props.editableHandleEdit(props.editableName)}
          />
        </span>
      )}
    </div>
  );
}
