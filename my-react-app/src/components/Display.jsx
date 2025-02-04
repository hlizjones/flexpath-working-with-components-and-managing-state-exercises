import React, { useState, useCallback } from "react";

export default function Display() {
    const [message, setMessage] = useState("")

    const displayMessage = useCallback(() => {
        setMessage("Message made with useCallback. Hoorah!")
    }, []
    )

    return (<div>
        <h2>Message: {message}</h2>
        <button onClick={displayMessage}>Display message</button>
    </div>
    )
}


