import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DeeplyNested () {
    const value = useContext(ThemeContext)
    return (<div>{value}</div>)
}