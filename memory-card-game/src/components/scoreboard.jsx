function ScoreKeeper({ scoreCurr, scoreBest }) {
  return (
    <header className="App-header">
      <div>
        <h1 id="heading">Test Your Memory!</h1>
        <p id="mission">Click on the matching items as they appear.</p>
        <div className ="d-flex justify-content-around align-items-center">
          <div>
            <p>Current Score:</p>
            <p>{scoreCurr}</p>
          </div>
          <div>
            <p>Best Score:</p>
            <p>{scoreBest}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ScoreKeeper;
