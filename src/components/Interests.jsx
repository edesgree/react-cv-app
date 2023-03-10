import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import Button from './helpers/Button';
export default function Interests(props) {
  const [skillName, setSkillName] = React.useState('');
  const [skillId, setSkillId] = React.useState(nanoid());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (skillName !== '') {
      setSkillId(nanoid());
      props.add(skillName, skillId);
      setSkillName('');
    }
  };

  const handleChange = (event) => {
    setSkillName(event.target.value);
  };
  const handleDelete = (event) => {
    setSkillName('');
    props.delete(event.currentTarget.id);
  };

  const interestsElements = props.interests.map((interest) => {
    return (
      <li key={interest.id}>
        <span className="item-name">{interest.name}</span>
        <div className=" is-hidden-preview">
          <Button
            name="delete"
            id={interest.id}
            action={handleDelete}
            iconSize="xs"
            iconSymbol="fa-trash"
            text=""
          />
        </div>
      </li>
    );
  });
  return (
    <div>
      <h4>Interests</h4>
      <div className="field has-addons is-hidden-preview">
        <div className="control">
          <input
            value={skillName}
            onChange={handleChange}
            type="text"
            name="skillz"
            placeholder="Enter a new skill"
            className="input is-small"
          />
        </div>
        <div className="control">
          <button className="button is-info is-small" onClick={handleSubmit}>
            Add +
          </button>
        </div>
      </div>

      <ul className="list-item">{interestsElements}</ul>
    </div>
  );
}
