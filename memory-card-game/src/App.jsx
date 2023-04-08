import { useState } from 'react';
import ScoreKeeper from './scoreboard';
import Game from './game';
import './App.css';

function App() {
  let [items, setItems] = useState([]);
  let [scoreCurr, setscoreCurr] = useState(0);
  let [scoreBest, setscoreBest] = useState(0);

  function handleScore(increment) {
    if (increment) {
      setscoreCurr(scoreCurr+1);
    } else {
      if (scoreCurr > scoreBest) {
        setscoreBest(scoreCurr);
      }
      setscoreCurr(0);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 id="heading">Test Your Memory!</h1>
      <p id="mission">Click on the matching items as they appear.</p>
      </header>
      < ScoreKeeper scoreCurr={scoreCurr} scoreBest={scoreBest} />
      < Game handleScore={handleScore}/>
    </div>
  );
}

export default App;
