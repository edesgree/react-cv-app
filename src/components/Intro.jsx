import React from 'react';

import EditableText from './helpers/EditableText';
import InputEditable from './helpers/InputEditable';
export default function Intro(props) {
  return (
    <div>
      <header className="hero ">
        <div className="hero-body">
          <p className="title is-1">
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
          </p>
          <p className="subtitle">
            <EditableText
              currentEdit={props.currentEdit}
              editableName="userJobTitle"
              handleChange={props.handleChange}
              editableTextContent={props.userJobTitle}
              editableHandleSave={() => props.handleEdit(null)}
              editableHandleEdit={props.handleEdit}
              inputType="text"
            />
          </p>
        </div>
      </header>
      <div className="description">
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
    </div>
  );
}
