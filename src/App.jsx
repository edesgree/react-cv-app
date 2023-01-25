import { useState } from 'react';
import data from './assets/data';
import Interests from './components/Interests';
import Intro from './components/Intro';
import Socials from './components/Socials';
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
  const [count, setCount] = useState(0);

  return (
    <main className="App columns">
      <aside className="column is-one-third ">
        <div className="content">
          <Intro
            firstName={data.firstName}
            lastName={data.lastName}
            userJobTitle={data.userJobTitle}
            userDescription={data.userDescription}
          />
          <UserContact
            email={data.email}
            phone={data.phone}
            location={data.location}
            website={data.website}
          />
          <h4>Socials</h4>
          <Socials socials={data.socials} />
          <h4>Interests</h4>
          <Interests interests={data.interests} />
        </div>
      </aside>
      <div className="column experiences">
        <h1 className="title is-1">React CV App</h1>
        <h2 className="title">Work Experiences</h2>
        <div className="work-item columns">
          <div className="column">
            <small> 14/02/2020 - 12/06/2022</small>
            <h3 className="title">Job title</h3>
            <h4>Company name</h4>
            <span>Montreal,canada</span>
          </div>
          <div className="column">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi provident tenetur voluptatibus dolorum facere quo
              consectetur. Similique magnam non illum odit mollitia, libero
              quis, obcaecati vero officiis itaque dignissimos repellat.
            </p>
          </div>
        </div>
        <h2 className="title">Education</h2>
        <div className="education-item">
          <h3>Diploma title</h3>
          <h4>University name</h4>
          <small> June 2020</small>
          <p>notes</p>
        </div>
      </div>
    </main>
  );
}

export default App;
