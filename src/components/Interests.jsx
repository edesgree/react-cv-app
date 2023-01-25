import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Interests(props) {
  const interestsElements = props.interests.map((interest, index) => {
    return <li key={index}>{interest}</li>;
  });
  return <ul>{interestsElements}</ul>;
}
