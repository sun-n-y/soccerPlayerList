import { useState } from 'react';
import { data } from './data';
import List from './components/List';

function App() {
  const [players, setPlayers] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <h2>{players.length} players</h2>
          <List players={players} />
          <button
            type="button"
            className="btn"
            onClick={() => {
              setPlayers([]);
            }}
          >
            clear all
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
