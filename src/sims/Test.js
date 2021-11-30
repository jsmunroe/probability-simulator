import { useEffect, useState } from "react"
import * as random from '../random'

export default function Test() {
    const [iterations, setIterations] = useState(0);
    const [chooseCounts, setChooseCounts] = useState(null);
    const [startTime] = useState(new Date());
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        setTimeout(() => {

            let set = chooseCounts ??
                random.set({
                    size: 10,
                    setItem: i => ({ times: 0, percent: 0 }),
                })

            const number = random.number(0, set.length - 1);
            const item = set[number];
            set[number] = {...item, times: item.times+1};

            set = set.map(item => ({...item, percent: item.times / iterations * 100}))

            setIterations(i => i + 1);
            setChooseCounts(set);

            setElapsedTime(Math.floor((new Date() - startTime) / 1000));
        }, 100)
    })

    return <article className="monty sim">
        <h2>Flat Distrobution Test</h2>

        <div>
            <label>Iterations: </label>
            <span>{iterations}</span>
        </div>

        {chooseCounts?.map((c, i) => (
            <div>
                <label>Times {i} Chosen: </label>
                <span>{c.times}</span> &nbsp;
                <span>{c.percent}</span>
            </div>
        ))}

        <div>
            <label>Elapsed Time: </label>
            <span>{elapsedTime} seconds</span>
        </div>

    </article>
}