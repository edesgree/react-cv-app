import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props) {
  return (
    <button
      className={`button is-small ${props.style}`}
      name={props.name}
      id={props.id}
      onClick={props.action}
    >
      {props.text && <span>{props.text}</span>}

      <span className="icon is-small">
        <FontAwesomeIcon
          id={props.id}
          icon={`fas ${props.iconSymbol}`}
          size={props.iconSize}
          color={props.style === 'is-info' ? 'white' : '#5961f9'}
        />
      </span>
    </button>
  );
}
