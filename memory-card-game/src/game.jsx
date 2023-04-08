import { useState } from 'react';
import Prompt from './prompt';

const itemsStart = [];
for (let i = 65; i < 75; i++) {
    itemsStart.push({
        id: i,
        content: String.fromCharCode(i).toUpperCase,
        displayed: false,
    });
}
console.log(itemsStart);

export default function Game(props) {
    const [items, setItems] = useState[[itemsStart]];

    function randomItem() {
        let rand = Math.floor(Math.random() * items.length);
        return rand;
    }

    function handleAnswer(event, item, index, answer) {
        props.handleScore(item.displayed === answer)
    }

    const itemList = items.map((i) => {
        if (i === item){
            i.displayed = true;
            return i;
        } else return i;
    });
    setItems(itemList);

    const index = randomItem();
    const item = items[index];

    return (
        <main>
            <p id={items.indexOf(item)}>{item.content}</p>
            <Prompt item={item} index={index} handleAnswer={handleAnswer} />
        </main>
    );
}




    

