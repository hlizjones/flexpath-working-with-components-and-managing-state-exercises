import React, {useState} from "react";

export default function Counter () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Count: {count}</h2>
        <button onClick={() => setCount((count) => ++count)}>Increment</button>
        <button onClick={() => setCount((count) => --count)}>Decrement</button>
        </div>
    )
}