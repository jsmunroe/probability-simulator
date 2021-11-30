import { useEffect, useState } from "react"
import * as random from '../random'

export default function Classroom() {
    const [selections, setSelections] = useState(0);
    const [girlsSelected, setGirlsSelected] = useState(0);
    const [startTime] = useState(new Date());
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            // Create random size classroom of even size with boys (0) and girls (1).
            let classroom = random.set({
                minSize: 10,
                maxSize: 100,
                sizeModulo: 2,
                setItem: i => i%2,
            });
            
            while (true) {
                const [first, rest] = random.choose(classroom);
                const [second] = random.choose(rest);

                if (first !== 0 && second !== 0) { // Boy not picked
                    continue;
                }

                const other = first === 0 ? second : first;

                setSelections(i => i + 1);
                setGirlsSelected(i => other === 1 ? i + 1 : i);

                setElapsedTime(Math.floor((new Date() - startTime) / 1000))

                break;
            }
        }, 100)
    })

    const percentGirls = (selections !== 0) ? girlsSelected / selections : 0;

    return <article className="classroom sim">
        <h2>Classroom</h2>
        <p><strong>Question: </strong>
            Out of a class of equal boys and equal girls two children are selected 
            randomly. You are told that one of them is a boy, what is the chance 
            that a girl was selected?
        </p>

        <h3>Operations</h3>
        <ol>
            <li>Generate classroom of random size between 10 and 100 with even boys and girls.</li>
            <li>Choose 2 children at random from classroom.</li>
            <li>If a boy is not chosen, do not record.</li>
            <li>Increment "Total Selections".</li>
            <li>If other child is a girl, increment "Girls Selected".</li>
        </ol>

        <h3>Results</h3>
        <div>
            <label>Total Selections: </label>
            <span>{selections}</span>
        </div>
        <div>
            <label>Girls Selected: </label>
            <span>{girlsSelected}</span>
        </div>
        <div>
            <label>% Girls Selected: </label>
            <span>{percentGirls * 100.0}%</span>
        </div>
        <div>
            <label>Elapsed Time: </label>
            <span>{elapsedTime} seconds</span>
        </div>
    </article>
}