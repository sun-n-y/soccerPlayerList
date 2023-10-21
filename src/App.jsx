import { useState } from 'react';
import { data } from './data';

function App() {
  const [players, setPlayer] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <h2>{players.length} players</h2>
        </div>
      </main>
    </>
  );
}

export default App;
