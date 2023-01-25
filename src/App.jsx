import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLink,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App columns">
      <aside className="column is-one-third content">
        <header>
          <img
            width="150"
            src="data:image/png;base64,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"
            alt=""
          />
          <h1 className="title">Firstname Lastname</h1>
          <h2 className="subtitle">Job title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            consectetur dolores accusantium error blanditiis quaerat deserunt
            asperiores, necessitatibus, itaque aut voluptates eveniet veniam.
          </p>
          <ul className="user-info">
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> email@toto.com
            </li>
            <li>
              <FontAwesomeIcon icon={faLink} /> www.toto.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 343-2343-434
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> Nantes, France
            </li>
          </ul>
          <h4>Socials</h4>
          <ul>
            <li>Facebook</li>
            <li>Github</li>
            <li>Instagram</li>
          </ul>
          <h4>Interests</h4>
          <ul>
            <li>badminton</li>
            <li>rock climbing</li>
            <li>space science</li>
          </ul>
        </header>
      </aside>
      <div className="column experiences">
        <h1 className="title is-1">React CV App</h1>
        <h2>Work Experiences</h2>
        blabla
        <h2>Education</h2>
        blabla
      </div>
    </main>
  );
}

export default App;
