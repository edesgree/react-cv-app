import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputEditable from './InputEditable';
export default function EditableText(props) {
  let linkPrefix;
  props.inputType === 'url'
    ? (linkPrefix = 'http://')
    : props.inputType === 'email'
    ? (linkPrefix = 'mailto://')
    : '';
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
          {props.inputType === 'url' || props.inputType === 'email' ? (
            <a
              target="_blank"
              href={`${linkPrefix}${props.editableTextContent}`}
            >
              {props.editableTextContent}
            </a>
          ) : (
            props.editableTextContent
          )}

          <span className="action action-save icon-holder">
            <button className="button is-small">
              <FontAwesomeIcon
                className=""
                icon="fa-solid fa-pen-to-square"
                size="xs"
                color="#5961f9"
                onClick={() => props.editableHandleEdit(props.editableName)}
              />
            </button>
          </span>
        </span>
      )}
    </div>
  );
}
