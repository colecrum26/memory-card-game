import React from 'react';
import scoreKeeper from './scoreboard';
import Items from './items';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 id="heading">Test Your Memory!</h1>
      <p id="mission">Click on the matching items as they appear.</p>
      </header>
      {/* < Scoreboard />
      < Items /> */}
    </div>
  );
}

export default App;
