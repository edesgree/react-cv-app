import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditableText from './helpers/EditableText';

export default function UserContact(props) {
  return (
    <ul className="user-info">
      <li>
        <FontAwesomeIcon icon="envelope" />
        <EditableText
          currentEdit={props.currentEdit}
          editableName="email"
          handleChange={props.handleChange}
          editableTextContent={props.email}
          editableHandleSave={() => props.handleEdit(null)}
          editableHandleEdit={props.handleEdit}
          inputType="text"
        />
      </li>
      <li>
        <FontAwesomeIcon icon="link" />
        <EditableText
          currentEdit={props.currentEdit}
          editableName="website"
          handleChange={props.handleChange}
          editableTextContent={props.website}
          editableHandleSave={() => props.handleEdit(null)}
          editableHandleEdit={props.handleEdit}
          inputType="text"
        />
      </li>
      <li>
        <FontAwesomeIcon icon="phone" />
        <EditableText
          currentEdit={props.currentEdit}
          editableName="phone"
          handleChange={props.handleChange}
          editableTextContent={props.phone}
          editableHandleSave={() => props.handleEdit(null)}
          editableHandleEdit={props.handleEdit}
          inputType="text"
        />
      </li>
      <li>
        <FontAwesomeIcon icon="location-dot" />
        <EditableText
          currentEdit={props.currentEdit}
          editableName="location"
          handleChange={props.handleChange}
          editableTextContent={props.location}
          editableHandleSave={() => props.handleEdit(null)}
          editableHandleEdit={props.handleEdit}
          inputType="text"
        />
      </li>
    </ul>
  );
}
