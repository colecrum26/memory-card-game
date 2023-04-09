import { useState } from 'react';
import ScoreKeeper from './components/scoreboard';
import Game from './components/game';
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
      < ScoreKeeper scoreCurr={scoreCurr} scoreBest={scoreBest} />
      < Game handleScore={handleScore}/>
    </div>
  );
}

export default App;
