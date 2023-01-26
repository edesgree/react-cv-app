import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditableText from './helpers/EditableText';
import { nanoid } from 'nanoid';
import Button from './helpers/Button';
export default function Education(props) {
  const [edit, setEdit] = React.useState(false);
  const [formEducationData, setFormEducationData] = React.useState({});

  const handleAdd = (event) => {
    event.preventDefault();
    props.handleAdd();
  };
  const handleEdit = (event) => {
    setEdit(true);
    props.setCurrent(event.currentTarget.id);
    //setCurrentEditId(event.currentTarget.id);
    //console.log('currentEdit', props.currentEdit);
    console.log('event.currentTarget.id', event.currentTarget.id);

    setFormEducationData(
      props.education.filter((item) => item.id === event.currentTarget.id)[0]
    );
  };

  const handleDelete = (event) => {
    props.handleDelete(event.currentTarget.id);
  };
  const handleSave = () => {
    //send new object to be added to global data
    props.handleEdit(formEducationData);
    props.setCurrent('');
    setEdit(false);
  };
  function handleChange(event) {
    // update current local data object
    const { name, value, type, checked } = event.target;
    setFormEducationData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  const educationElements = props.education.map((item) => {
    return (
      <li key={item.id} name={item.id}>
        <div className="education-item">
          {edit && item.id === props.currentEdit ? (
            <div>
              <input
                type="text"
                placeholder={formEducationData.diplomaTitle}
                onChange={handleChange}
                name="diplomaTitle"
                value={formEducationData.diplomaTitle}
              />
              <input
                type="text"
                placeholder="schoolName"
                onChange={handleChange}
                name="schoolName"
                value={formEducationData.schoolName}
              />
              <input
                type="text"
                placeholder="dateGraduated"
                onChange={handleChange}
                name="dateGraduated"
                value={formEducationData.dateGraduated}
              />
              <textarea
                value={formEducationData.notes}
                placeholder="notes"
                onChange={handleChange}
                name="notes"
              />
            </div>
          ) : (
            <div>
              <h3>{item.diplomaTitle}</h3>
              <h4>{item.schoolName}</h4>
              <small> {item.dateGraduated}</small>
              <p>{item.notes}</p>
            </div>
          )}
        </div>

        {edit && item.id === props.currentEdit ? (
          <Button
            name="save"
            id={item.id}
            action={handleSave}
            iconSize="xs"
            iconSymbol="fa-save"
            text=""
          />
        ) : (
          <div className="field has-addons">
            <p className="control">
              <Button
                name="edit"
                id={item.id}
                action={handleEdit}
                iconSize="xs"
                iconSymbol="fa-pen-to-square"
                text=""
              />
            </p>
            <p className="control">
              <Button
                name="delete"
                id={item.id}
                action={handleDelete}
                iconSize="xs"
                iconSymbol="fa-trash"
                text=""
              />
            </p>
          </div>
        )}
      </li>
    );
  });
  return (
    <section>
      <h2 className="title">Education</h2>
      <ul className="education-elements">{educationElements}</ul>
      <Button
        name="add"
        action={handleAdd}
        iconSize="xs"
        iconSymbol="fa-plus"
        text="Add school"
      />
    </section>
  );
}
