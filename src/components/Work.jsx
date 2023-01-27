import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditableText from './helpers/EditableText';
export default function Work(props) {
  const workElements = props.work.map((item) => {
    return (
      <li key={item.id}>
        <div className="work-item columns">
          <div className="column">
            <small>
              {item.dateStart} - {item.dateEnd}
            </small>
            <h3 className="title">{item.jobTitle}</h3>
            <h4>{item.company}</h4>
            <span>{item.location}</span>
          </div>
          <div className="column">
            <p>{item.description}</p>
          </div>
        </div>
      </li>
    );
  });
  return (
    <section className="experience box">
      <h2 className="title">Work Experiences</h2>
      <ul className="work-elements">{workElements}</ul>
    </section>
  );
}
