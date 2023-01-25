import React from 'react';

export default function Education(props) {
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
    </section>
  );
}
