import React, {useState} from "react";

export default function ToBreak() {
const [error, setError] = useState("")
    try {
        throw new Error("It broke")
    } catch {
        setError("Error in ToBreak! Uh oh!")
    }
    if (error) throw error;
}