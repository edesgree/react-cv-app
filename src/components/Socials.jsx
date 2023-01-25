import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socials(props) {
  const socialsElements = props.socials.map((item) => {
    return (
      <li key={item.id}>
        <a href={item.url} target="_blank">
          {item.name}
        </a>
      </li>
    );
  });
  return <ul className="user-socials">{socialsElements}</ul>;
}
