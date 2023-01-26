import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props) {
  return (
    <button
      className="button is-small"
      name={props.name}
      id={props.id}
      onClick={props.action}
    >
      {props.text && <span>{props.text}</span>}

      <span class="icon is-small">
        <FontAwesomeIcon
          id={props.id}
          icon={`fas ${props.iconSymbol}`}
          size={props.iconSize}
          color="rgb(147 30 140)"
        />
      </span>
    </button>
  );
}
