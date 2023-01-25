import React from 'react';
import data from './assets/data';
import Interests from './components/Interests';
import Intro from './components/Intro';
import Socials from './components/Socials';
import Work from './components/Work';
import Education from './components/Education';
import UserContact from './components/UserContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faLink,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faLink, faPhone, faLocationDot);

function App() {
  const [count, setCount] = React.useState(0);
  const [editMode, setEditMode] = React.useState(false);
  const [cvData, setCvData] = React.useState(
    JSON.parse(localStorage.getItem('cvData')) || data
  );

  function handleEditButton(e) {
    e.preventDefault();
    setEditMode(!editMode);
    console.log('editMode', editMode);
  }
  React.useEffect(() => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
    console.log(cvData);
  }, [cvData]);
  return (
    <main className="App columns">
      <aside className="column is-one-third ">
        <div className="content">
          <button className="button" onClick={handleEditButton}>
            {editMode ? 'preview' : 'edit'}
          </button>
          <Intro
            firstName={cvData.firstName}
            lastName={cvData.lastName}
            userJobTitle={cvData.userJobTitle}
            userDescription={cvData.userDescription}
          />
          <UserContact
            email={cvData.email}
            phone={cvData.phone}
            location={cvData.location}
            website={cvData.website}
          />
          <h4>Socials</h4>
          <Socials socials={cvData.socials} />
          <h4>Interests</h4>
          <Interests interests={cvData.interests} />
        </div>
      </aside>
      <div className="column experiences">
        <header>
          <h1 className="title is-1">React CV App</h1>
          {editMode ? 'edit mode' : 'preview mode'}
        </header>

        <Work work={cvData.work} />
        <Education education={cvData.education} />
      </div>
    </main>
  );
}

export default App;
