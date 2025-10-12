import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMonde] = useState(false);

    useEffect(() => {
        const storeTheme = localStorage.getItem('theme')
        if (storeTheme === "dark") {
            setIsDarkMonde(true)
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMonde(true);

        } else {

            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
            setIsDarkMonde(false);

        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
            setIsDarkMonde(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMonde(true);
        }
    };


    return (
        <button onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full  transition-colors duration-300",
                'focus:outlin-hidden')}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-yellow-300" />
            )}
        </button>
    );
}