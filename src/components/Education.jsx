import React from 'react';

import Button from './helpers/Button';
import InputField from './helpers/InputField';
export default function Education(props) {
  const [edit, setEdit] = React.useState(false);
  const [formEducationData, setFormEducationData] = React.useState({});

  const handleAdd = (event) => {
    // call add function for this target
    event.preventDefault();
    props.handleAdd();
  };
  const handleEdit = (event) => {
    // set target item to editable input
    setEdit(true);
    props.setCurrent(event.currentTarget.id);
    setFormEducationData(
      props.education.filter((item) => item.id === event.currentTarget.id)[0]
    );
  };

  const handleDelete = (event) => {
    // call delete function for this target
    event.preventDefault();
    props.handleDelete(event.currentTarget.id);
  };
  const handleSave = () => {
    //send new object to be added to global data
    props.handleEdit(formEducationData);
    // reset current item edited, close edit mode
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
        {edit && item.id === props.currentEdit ? (
          <div className="mb-5">
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Diploma title</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formEducationData.diplomaTitle}
                    handleChange={handleChange}
                    name="diplomaTitle"
                    inputType="text"
                    placeholder="Diploma title"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">School Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formEducationData.schoolName}
                    handleChange={handleChange}
                    name="schoolName"
                    inputType="text"
                    placeholder="School Name"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Date Graduated</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formEducationData.dateGraduated}
                    handleChange={handleChange}
                    name="dateGraduated"
                    inputType="date"
                    placeholder="Date Graduated"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Notes</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formEducationData.notes}
                    handleChange={handleChange}
                    name="notes"
                    inputType="textarea"
                    placeholder="Notes"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                {/*<!-- Left empty for spacing -->*/}
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <Button
                      name="save"
                      id={item.id}
                      action={handleSave}
                      iconSize="xs"
                      iconSymbol="fa-save"
                      text=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3>{item.diplomaTitle}</h3>
            <h4>{item.schoolName}</h4>
            <small> {item.dateGraduated}</small>
            <p>{item.notes}</p>
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
          </div>
        )}
      </li>
    );
  });
  return (
    <section className="experience card">
      <div className="card-header">
        <h2 className="card-header-title title">Education</h2>
      </div>
      <div className="card-content">
        <ul className="experience-elements content">{educationElements}</ul>
      </div>
      <div className="card-footer is-justify-content-center is-flex">
        <div className="mt-5">
          <Button
            name="addSchool"
            action={handleAdd}
            iconSize="xs"
            iconSymbol="fa-plus"
            text="Add school"
            style="is-info"
          />
        </div>
      </div>
    </section>
  );
}
