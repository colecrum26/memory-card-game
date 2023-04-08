
export default function Prompt({handleAnswer, index, item}) {
    return (
        <div>
            <p>Have you seen this before?</p>
            <div>
                <button onClick = {(e) => handleAnswer (e, item, index, true)}>Yes</button>
                <button onClick = {(e) => handleAnswer (e, item, index, false)}>No</button>
            </div>
        </div>
    )
}