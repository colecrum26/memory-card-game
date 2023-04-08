
export default function ScoreKeeper({scoreCurr, scoreBest}) {

    return (
        <div>
            <p>Current Score:</p>
            <p>{scoreCurr}</p>
            <p>Best Score:</p>
            <p>{scoreBest}</p>
        </div>
    );
}
