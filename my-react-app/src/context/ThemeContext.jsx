import React, {createContext, useContext} from "react";

export const ThemeContext = createContext({})
function Context () {
    return(
        <ThemeContext.Provider value={'This is a shared value'}/>
    )
}