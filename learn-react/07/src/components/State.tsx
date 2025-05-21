import { useState } from "react";

export default function State() {
    const [count, setCount] = useState(0);
    const increment = () => setCount((count) => count + 1);
    const decrement = () => setCount((count) => count - 1);
    const reset = () => setCount(0);
    return (
        <>
            <h1>useState Count: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>+</button>
        </>
    );
}
