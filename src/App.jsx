import React from 'react';
import data from './assets/data';
import ErrorBoundary from './components/ErrorBoundary';
import Interests from './components/Interests';
import Intro from './components/Intro';
import Socials from './components/Socials';
import Work from './components/Work';
import Education from './components/Education';
import InputField from './components/helpers/InputField';
import UserContact from './components/UserContact';
import Photo from './components/Photo';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faLink,
  faPhone,
  faLocationDot,
  faPenToSquare,
  faTrash,
  faSave
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faEnvelope,
  faSave,
  faLink,
  faPhone,
  faLocationDot,
  faPenToSquare,
  faTrash
);

function App() {
  const [count, setCount] = React.useState(0);
  const [editMode, setEditMode] = React.useState(false);
  const [currentEdit, setCurrentEdit] = React.useState(null);
  const [input, setInput] = React.useState('');
  const [cvData, setCvData] = React.useState(
    JSON.parse(localStorage.getItem('cvData')) || data
  );

  function handleEditButton(e) {
    e.preventDefault();
    setEditMode(!editMode);
    console.log('editMode', editMode);
  }
  React.useEffect(() => {
    //localStorage.setItem('cvData', JSON.stringify(cvData));
    console.log('cvData', cvData);
    console.log('current edit:', currentEdit);
  }, [cvData]);
  /**
   * Simple text items
   */
  const handleChange = (event) => {
    console.log('event.target.name', event.target.name);
    setCvData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      };
    });
  };
  const handleEdit = (index) => {
    setCurrentEdit(index);
    //setInput(items[index]);
    console.log('currentEdit', currentEdit);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /*if (input !== '') {
      if (editing !== null) {
        const newItems = [...items];
        newItems[editing] = input;
        setItems(newItems);
        setEditing(null);
      } else {
        setItems([...items, input]);
      }
      setInput('');
    }*/
  };
  /**
   * SKILLS / INTERESTS
   */
  const handleSkillAdd = (skillAdd, idAdd) => {
    setCvData((prevData) => {
      return {
        ...prevData,
        interests: cvData.interests.concat({ id: idAdd, name: skillAdd })
      };
    });
    console.log('add skill');
  };

  const handleSkillDelete = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      interests: prevData.interests.filter((item) => item.id !== id)
    }));
  };
  /**
   * EDUCATION
   */
  const handleEducationEdit = (newSchool) => {
    console.log('newSchool', newSchool.id);
    console.log('handleEducationEdit', cvData);

    setCvData((prevData) => {
      return {
        ...prevData,
        education: prevData.education.map((item) => {
          if (item.id === newSchool.id) {
            return newSchool;
          } else {
            return item;
          }
        })
      };
    });
  };
  const handleEducationAdd = () => {
    setCvData((prevData) => {
      return {
        ...prevData,
        education: [
          ...prevData.education,
          {
            id: nanoid(),
            dateGraduated: '16-12-2008',
            diplomaTitle: 'new school diploma',
            schoolName: 'new school name',
            notes: 'new school notes'
          }
        ]
      };
    });
    console.log('add school', cvData);
  };
  const handleEducationDelete = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((item) => item.id !== id)
    }));
    console.log('handleEducationDelete', id);
  };
  return (
    <main className="App columns">
      <aside className="column is-one-third ">
        <div className="content">
          <button className="button" onClick={handleEditButton}>
            {editMode ? 'preview' : 'edit'}
          </button>
          <Photo />
          <Intro
            handleChange={handleChange}
            handleEdit={handleEdit}
            currentEdit={currentEdit}
            firstName={cvData.firstName}
            lastName={cvData.lastName}
            userJobTitle={cvData.userJobTitle}
            userDescription={cvData.userDescription}
          />
          <UserContact
            handleChange={handleChange}
            handleEdit={handleEdit}
            currentEdit={currentEdit}
            email={cvData.email}
            phone={cvData.phone}
            location={cvData.location}
            website={cvData.website}
          />

          <Socials socials={cvData.socials} />

          <ErrorBoundary>
            <Interests
              add={handleSkillAdd}
              delete={handleSkillDelete}
              interests={cvData.interests}
            />
          </ErrorBoundary>
        </div>
      </aside>
      <div className="column experiences">
        <header>
          {!editMode ? (
            <h1 className="title is-1">{cvData.mainTitle}</h1>
          ) : (
            <div className="form-control">
              <InputField
                value={cvData.mainTitle}
                handleChange={handleChange}
                name="mainTitle"
                type="text"
              />
            </div>
          )}

          {editMode ? 'edit mode' : 'preview mode'}
        </header>

        <Work
          handleChange={handleChange}
          handleEdit={handleEdit}
          currentEdit={currentEdit}
          work={cvData.work}
        />
        <Education
          handleAdd={handleEducationAdd}
          handleDelete={handleEducationDelete}
          handleEdit={handleEducationEdit}
          education={cvData.education}
          currentEdit={currentEdit}
          resetCurrent={() => handleEdit(null)}
          setCurrent={handleEdit}
        />
      </div>
    </main>
  );
}

export default App;
