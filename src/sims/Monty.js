import { useEffect, useState } from "react"
import * as random from '../random'

export default function Monty() {
    const [iterations, setIterations] = useState(0);
    const [noSwitchWins, setNoSwitchWins] = useState(0);
    const [switchWins, setSwitchWins] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [startTime] = useState(new Date());

    useEffect(() => {
        setTimeout(() => {
            // Create doors [0,1,0]
            let doors = random.set({
                size: 3,
                setItem: i => i%2,
            })

            // Select a door, take a door away, and keep the unselected door.
            const [selected, rest] = random.choose(doors);
            const [, last] = random.chooseWhere(rest, i => i === 0); // is a goat
            const [unselected] = last;

            setIterations(i => i + 1);
            setNoSwitchWins(i => selected ? i + 1 : i);
            setSwitchWins(i => unselected ? i + 1 : i);

            setElapsedTime(Math.floor((new Date() - startTime) / 1000));
        }, 100)
    })

    const percentNoSwitchWins = iterations === 0 ? 0 : noSwitchWins / iterations;
    const percentSwitchWins = iterations === 0 ? 0 : switchWins / iterations;

    return <article className="monty sim">
        <h2>Monty Hall</h2>
        <p><strong>Question: </strong>
            A host gives you three doors. Behind 1 is a new car; behind the 
            other 2 is a goat. After selecting a door, the host takes away one
            of the unselected doors, and offers to let you switch to the 
            remaining unselected door. What is the probability favoring this 
            switch? 
        </p>

        <h3>Operations</h3>
        <ol>
            <li>Generate 3 doors, 2 with a goat (0) and 1 with a new car (1).</li>
            <li>Choose a door at random.</li>
            <li>Take away an unselected door.</li>
            <li>Increment "Total Iterations".</li>
            <li>If the selected door has the new car, increment "Times No-Switch Wins".</li>
            <li>If the other door has the new car, increment "Times Switch Wins".</li>
        </ol>

        <h3>Results</h3>
        <div>
            <label>Total Iterations: </label>
            <span>{iterations}</span>
        </div>
        <br/>

        <div>
            <label>Times No-Switch Wins: </label>
            <span>{noSwitchWins}</span>
        </div>
        <div>
            <label>% No-Switch Wins: </label>
            <span>{percentNoSwitchWins * 100.0}%</span>
        </div>
        <br/>

        <div>
            <label>Times Switch Wins: </label>
            <span>{switchWins}</span>
        </div>
        <div>
            <label>% Switch Wins: </label>
            <span>{percentSwitchWins * 100.0}%</span>
        </div>
        <br/>

        <div>
            <label>Elapsed Time: </label>
            <span>{elapsedTime} seconds</span>
        </div>
    </article>
}