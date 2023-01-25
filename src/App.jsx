import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <header>
        <h1>hello</h1>
        <div class="buttons">
          <button class="button is-primary">Primary</button>
          <button class="button is-link">Link</button>
        </div>

        <div class="buttons">
          <button class="button is-info">Info</button>
          <button class="button is-success">Success</button>
          <button class="button is-warning">Warning</button>
          <button class="button is-danger">Danger</button>
        </div>
      </header>
    </main>
  );
}

export default App;
