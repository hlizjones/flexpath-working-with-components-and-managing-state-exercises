// Create a button that runs this function for the next number (n + 1) 
// each time it is clicked and displays the result in the App.jsx component.

import React, { useState, useMemo } from "react";

export default function ExpensiveFunction() {
    const [number, setNumber] = useState(1)

    const factorial = useMemo(() => {
        const computeFactorial = (n) => (n <= 1 ? 1 : n * computeFactorial(n - 1));
        return computeFactorial(number);
    }, [number]);

    return (
        <div>
            <h2>Factorial of {number} is {factorial}</h2>
            <button onClick={() => setNumber((number) => ++number)}>Increment Number for Factorial</button>
        </div>
    )
}