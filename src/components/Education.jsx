import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Education(props) {
  const handleAdd = (event) => {
    event.preventDefault();
    props.handleAdd();
  };
  const handleChange = (event) => {
    //setSkillName(event.target.value);
  };
  const handleDelete = (event) => {
    //setSkillName('');
    //props.delete(event.currentTarget.id);
  };
  const educationElements = props.education.map((item) => {
    return (
      <li key={item.id}>
        <div className="education-item">
          <h3>{item.diplomaTitle}</h3>
          <h4>{item.schoolName}</h4>
          <small> {item.dateGraduated}</small>
          <p>{item.notes}</p>
        </div>
      </li>
    );
  });
  return (
    <section>
      <h2 className="title">Education</h2>
      <ul className="education-elements">{educationElements}</ul>
      <button onClick={handleAdd}>add</button>
    </section>
  );
}
