import React from "react";
import { createContext,useContext } from "react";

 const ThemeContext=React.createContext({
    thememode:"light",
    darktheme: ()=>{},
    lighttheme:()=> {}
})

export const ThemeProvider= ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}