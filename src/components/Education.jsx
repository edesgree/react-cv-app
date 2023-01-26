import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditableText from './helpers/EditableText';
import { nanoid } from 'nanoid';
export default function Education(props) {
  const [edit, setEdit] = React.useState(false);

  const [currentEditId, setCurrentEditId] = React.useState(null);
  const [formEducationData, setFormEducationData] = React.useState({});

  const handleAdd = (event) => {
    event.preventDefault();
    props.handleAdd();
  };
  const handleEdit = (event) => {
    setEdit(true);
    props.setCurrent(event.currentTarget.id);
    setCurrentEditId(event.currentTarget.id);
    console.log('currentEdit', props.currentEdit);
    console.log('event.currentTarget.id', event.currentTarget.id);

    setFormEducationData(
      props.education.filter((item) => item.id === event.currentTarget.id)[0]
    );
    console.log('handle edit FormEducationData', formEducationData);
    console.log(
      'education data filtered witu current target id',
      props.education.filter((item) => item.id === event.currentTarget.id)
    );
    console.log('currentTarget', event.currentTarget.id);
    console.log('Target', event.target.id);
  };

  const handleDelete = (event) => {
    //setSkillName('');
    props.handleDelete(event.currentTarget.id);
  };
  const handleSave = () => {
    props.handleEdit(formEducationData);

    props.setCurrent('');
    props.resetCurrent;
    setEdit(false);
    console.log('save', formEducationData);
    //send new object to be added to global data
  };
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormEducationData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
    //console.log('formEducationData', formEducationData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    //props.handleEdit(formEducationData);
    console.log('formEducationData', formEducationData);
  }
  const educationElements = props.education.map((item) => {
    console.log('educationElements id', item.id);
    return (
      <li key={item.id} name={item.id}>
        <div className="education-item">
          {edit && item.id === currentEditId ? (
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

        {edit && item.id === currentEditId ? (
          <button name="edit" id={item.id} onClick={handleSave}>
            <FontAwesomeIcon
              id={item.id}
              icon="fas fa-save"
              size="xs"
              color="rgb(147 30 140)"
            />
          </button>
        ) : (
          <div>
            <button name="edit" id={item.id} onClick={handleEdit}>
              <FontAwesomeIcon
                icon="fas fa-pen-to-square"
                size="xs"
                color="rgb(147 30 140)"
              />
            </button>
            <button name="delete" id={item.id} onClick={handleDelete}>
              <FontAwesomeIcon
                icon="fas fa-trash"
                size="xs"
                color="rgb(147 30 140)"
              />
            </button>
          </div>
        )}
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
