import React from 'react';

import Button from './helpers/Button';
import InputField from './helpers/InputField';
export default function Work(props) {
  const [edit, setEdit] = React.useState(false);
  const [formWorkData, setFormWorkData] = React.useState({});

  const handleAdd = (event) => {
    // call add function for this target
    event.preventDefault();
    props.handleAdd();
  };
  const handleEdit = (event) => {
    // set target item to editable input
    setEdit(true);
    props.setCurrent(event.currentTarget.id);
    setFormWorkData(
      props.work.filter((item) => item.id === event.currentTarget.id)[0]
    );
  };

  const handleDelete = (event) => {
    // call delete function for this target
    event.preventDefault();
    props.handleDelete(event.currentTarget.id);
  };
  const handleSave = () => {
    //send new object to be added to global data
    props.handleEdit(formWorkData);
    // reset current item edited, close edit mode
    props.setCurrent('');
    setEdit(false);
  };
  function handleChange(event) {
    // update current local data object
    const { name, value, type, checked } = event.target;
    setFormWorkData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }
  const workElements = props.work.map((item) => {
    return (
      <li key={item.id} name={item.id}>
        {edit && item.id === props.currentEdit ? (
          <div className="mb-5">
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Job title</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formWorkData.jobTitle}
                    handleChange={handleChange}
                    name="jobTitle"
                    inputType="text"
                    placeholder="Job title"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Company Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formWorkData.company}
                    handleChange={handleChange}
                    name="company"
                    inputType="text"
                    placeholder="Company Name"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Location</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formWorkData.location}
                    handleChange={handleChange}
                    name="location"
                    inputType="text"
                    placeholder="Location Name"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Start Date</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formWorkData.dateStart}
                    handleChange={handleChange}
                    name="dateStart"
                    inputType="date"
                    placeholder="Start Date"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">End Date</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formWorkData.dateEnd}
                    handleChange={handleChange}
                    name="dateEnd"
                    inputType="date"
                    placeholder="End Date"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Description</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <InputField
                    value={formWorkData.description}
                    handleChange={handleChange}
                    name="description"
                    inputType="textarea"
                    placeholder="Description"
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
        <h2 className="card-header-title title">Work Experiences</h2>
      </div>
      <div className="card-content">
        <ul className="experience-elements content">{workElements}</ul>
      </div>
      <div className="card-footer is-justify-content-center is-flex">
        <div className="mt-5">
          <Button
            name="addWork"
            action={handleAdd}
            iconSize="xs"
            iconSymbol="fa-plus"
            text="Add work"
            style="is-info"
          />
        </div>
      </div>
    </section>
  );
}
