import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './helpers/Button';
import InputField from './helpers/InputField';
export default function Socials(props) {
  const [edit, setEdit] = React.useState(false);
  const [formSocialData, setFormSocialData] = React.useState({});

  const handleAdd = (event) => {
    // call add function for this target
    event.preventDefault();
    props.handleAdd();
  };
  const handleEdit = (event) => {
    // set target item to editable input
    setEdit(true);
    props.setCurrent(event.currentTarget.id);
    setFormSocialData(
      props.social.filter((item) => item.id === event.currentTarget.id)[0]
    );
  };

  const handleDelete = (event) => {
    // call delete function for this target
    event.preventDefault();
    props.handleDelete(event.currentTarget.id);
  };
  const handleSave = () => {
    //send new object to be added to global data
    props.handleEdit(formSocialData);
    // reset current item edited, close edit mode
    props.setCurrent('');
    setEdit(false);
  };
  function handleChange(event) {
    // update current local data object
    const { name, value, type, checked } = event.target;
    setFormSocialData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }
  const socialsElements = props.social.map((item) => {
    return (
      <li key={item.id} name={item.id}>
        {edit && item.id === props.currentEdit ? (
          <div>
            <div className="field">
              <div className="control">
                <InputField
                  value={formSocialData.name}
                  handleChange={handleChange}
                  name="name"
                  inputType="text"
                  placeholder="name"
                />
              </div>
            </div>
            <div className="field has-addons">
              <p class="control">
                <a class="button is-small is-static">http://</a>
              </p>
              <div className="control is-expanded">
                <InputField
                  value={formSocialData.url}
                  handleChange={handleChange}
                  name="url"
                  inputType="url"
                  placeholder="url"
                />
              </div>
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
        ) : (
          <div>
            <div className="field has-addons">
              <a href={item.url} className="mr-2" target="_blank">
                {item.name}
              </a>
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
    <div className="block">
      <h4>Socials</h4>
      <ul className="user-socials">{socialsElements}</ul>
      <div>
        <Button
          name="addSchool"
          action={handleAdd}
          iconSize="xs"
          iconSymbol="fa-plus"
          text="Add link"
          style="is-info"
        />
      </div>
    </div>
  );
}
