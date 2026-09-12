import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({children}) {

    let [theme, setTheme] = useState("red");

    const thoggleTheme = () => {
        
        // theme === "light" ? setTheme("dark") : setTheme("light");
        setTheme((prev) => prev === 'red' ? 'green' : 'red' )
    } 

    return (
        <ThemeContext value={{theme, thoggleTheme}}>
            {children}
        </ThemeContext>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme &&& должен использоваться внутри ThemeProvider");   
    }
    return context
}
