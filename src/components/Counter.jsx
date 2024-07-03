import React from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increment}>Increment</button>
            <button disabled={counter === 0} onClick={decrement}>Decrement</button>
        </div>
    )
}