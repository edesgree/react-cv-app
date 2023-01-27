import React from 'react';

import EditableText from './helpers/EditableText';
import InputEditable from './helpers/InputEditable';
export default function Intro(props) {
  return (
    <div>
      <header>
        <h1 className="title">
          <EditableText
            currentEdit={props.currentEdit}
            editableName="firstName"
            handleChange={props.handleChange}
            editableTextContent={props.firstName}
            editableHandleSave={() => props.handleEdit(null)}
            editableHandleEdit={props.handleEdit}
            inputType="text"
          />
          <EditableText
            currentEdit={props.currentEdit}
            editableName="lastName"
            handleChange={props.handleChange}
            editableTextContent={props.lastName}
            editableHandleSave={() => props.handleEdit(null)}
            editableHandleEdit={props.handleEdit}
            inputType="text"
          />
        </h1>

        <h2 className="subtitle">
          <EditableText
            currentEdit={props.currentEdit}
            editableName="userJobTitle"
            handleChange={props.handleChange}
            editableTextContent={props.userJobTitle}
            editableHandleSave={() => props.handleEdit(null)}
            editableHandleEdit={props.handleEdit}
            inputType="text"
          />
        </h2>
      </header>
      <EditableText
        currentEdit={props.currentEdit}
        editableName="userDescription"
        handleChange={props.handleChange}
        editableTextContent={props.userDescription}
        editableHandleSave={() => props.handleEdit(null)}
        editableHandleEdit={props.handleEdit}
        inputType="textarea"
      />
    </div>
  );
}
