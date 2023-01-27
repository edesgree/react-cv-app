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
import Button from './components/helpers/Button';
import { nanoid } from 'nanoid';
import './fontawesome';

function App() {
  const [previewMode, setPreviewMode] = React.useState(false);
  const [currentEdit, setCurrentEdit] = React.useState(null);

  const [cvData, setCvData] = React.useState(
    JSON.parse(localStorage.getItem('cvData')) || data
  );

  function handleEditButton(e) {
    e.preventDefault();
    setPreviewMode(!previewMode);
  }
  React.useEffect(() => {
    // save CV data to storage
    //localStorage.setItem('cvData', JSON.stringify(cvData));
    console.log('cvData', cvData);
  }, [cvData]);
  React.useEffect(() => {
    console.log('current edit:', currentEdit);
  }, [currentEdit]);
  /**
   * Simple text items
   */
  const handleChange = (event) => {
    //update data with current input
    setCvData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      };
    });
  };
  // set current item being edited
  const handleEdit = (index) => {
    setCurrentEdit(index);
    //console.log('currentEdit', currentEdit);
  };

  /**
   * SKILLS / INTERESTS
   */
  const handleSkillAdd = (skillAdd, idAdd) => {
    // add a new item by concatening it to the items array
    setCvData((prevData) => {
      return {
        ...prevData,
        interests: cvData.interests.concat({ id: idAdd, name: skillAdd })
      };
    });
  };

  const handleSkillDelete = (id) => {
    // delete item by filtering it out of the list
    setCvData((prevData) => ({
      ...prevData,
      interests: prevData.interests.filter((item) => item.id !== id)
    }));
  };
  /**
   * EDUCATION
   */
  const handleEducationEdit = (newSchool) => {
    /**
     * if school in edit mode, we update the main cvData object
     * by injecting the edited school object in it
     */
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
    // add a new item by injecting a object with dummy data into the main cvData object
    setCvData((prevData) => {
      return {
        ...prevData,
        education: [
          ...prevData.education,
          {
            id: nanoid(),
            dateGraduated: '16-12-2008',
            diplomaTitle: 'My diploma title',
            schoolName: 'School name',
            notes: 'Some notes'
          }
        ]
      };
    });
  };
  const handleEducationDelete = (id) => {
    // delete item by filtering it out of the list
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((item) => item.id !== id)
    }));
  };
  /**
   * WORK EXPERIENCES
   */
  const handleWorkEdit = (newWork) => {
    /**
     * if workXP in edit mode, we update the main cvData object
     * by injecting the edited workXP object in it
     */
    setCvData((prevData) => {
      return {
        ...prevData,
        work: prevData.work.map((item) => {
          if (item.id === newWork.id) {
            return newWork;
          } else {
            return item;
          }
        })
      };
    });
  };
  const handleWorkAdd = () => {
    // add a new item by injecting a object with dummy data into the main cvData object
    setCvData((prevData) => {
      return {
        ...prevData,
        work: [
          ...prevData.work,
          {
            id: nanoid(),
            dateStart: 'start date',
            dateEnd: 'end date',
            jobTitle: 'New job',
            company: 'Company name',
            description: 'I did all these things...',
            location: 'City name'
          }
        ]
      };
    });
  };
  const handleWorkDelete = (id) => {
    // delete item by filtering it out of the list
    setCvData((prevData) => ({
      ...prevData,
      work: prevData.work.filter((item) => item.id !== id)
    }));
  };
  return (
    <main className="App columns">
      <aside className="column is-one-third ">
        <div className="content">
          <div className="block">
            <Button
              name="preview"
              action={handleEditButton}
              iconSize="xs"
              iconSymbol={previewMode ? 'fa-pen-to-square' : 'fa-eye'}
              text={previewMode ? 'Edit' : 'Preview'}
              style="is-info"
            />
            <span className="ml-2 tag is-light">
              {previewMode ? 'Preview mode' : 'Edit mode'}
            </span>
          </div>

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
          {previewMode ? (
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
        </header>

        <Work
          handleAdd={handleWorkAdd}
          handleDelete={handleWorkDelete}
          handleEdit={handleWorkEdit}
          work={cvData.work}
          currentEdit={currentEdit}
          setCurrent={handleEdit}
        />
        <Education
          handleAdd={handleEducationAdd}
          handleDelete={handleEducationDelete}
          handleEdit={handleEducationEdit}
          education={cvData.education}
          currentEdit={currentEdit}
          setCurrent={handleEdit}
        />
      </div>
    </main>
  );
}

export default App;
