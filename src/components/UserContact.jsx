import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserContact(props) {
  return (
    <ul className="user-info">
      <li>
        <FontAwesomeIcon icon="envelope" />
        {props.email}
      </li>
      <li>
        <FontAwesomeIcon icon="link" /> {props.website}
      </li>
      <li>
        <FontAwesomeIcon icon="phone" /> {props.phone}
      </li>
      <li>
        <FontAwesomeIcon icon="location-dot" /> {props.location}
      </li>
    </ul>
  );
}
