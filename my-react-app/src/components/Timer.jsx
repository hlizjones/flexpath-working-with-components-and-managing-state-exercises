import React, { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const id = setInterval(() => {
                setTime(new Date().toLocaleTimeString())
            }, 1000)
            return() => clearInterval(id)
        }, [])
    return <h2>{time}</h2>
} 
