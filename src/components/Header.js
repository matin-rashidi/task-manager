import React, { useEffect, useState } from 'react';

// Icons
import light from "../assets/icons/light.svg";
import dark from "../assets/icons/dark.svg";

const Header = () => {
    const [isChecked, setIsChecked] = useState("");
    const [isThemeChanged, setIsThemeChanged] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("isDark")) {
            localStorage.setItem("isDark", "false")
        } else {
            setIsChecked(JSON.parse(localStorage.getItem("isDark")))
        }
        
        const root = window.document.documentElement;
        if (JSON.parse(localStorage.getItem("isDark"))) {
            root.classList.add('dark')    
        } else {
            root.classList.remove('dark')
        }

    }, [isThemeChanged])

    const changeTheme = () => {
        const localTheme = JSON.parse(localStorage.getItem("isDark"));
        localStorage.setItem("isDark", JSON.stringify(!localTheme))
        setIsThemeChanged(!isThemeChanged)
    }

    return (
        <header className='w-full p-2 px-5 flex justify-between bg-teal-800 text-white text-center font-semibold'>
            <h1>Task Manager</h1>
            <div className='flex gap-2'>
                <img className='w-5' src={dark} alt="dark" />
                <div className='w-12 h-full bg-white rounded-full'>
                    <input checked={isChecked} onChange={changeTheme} className='appearance-none w-1/2 h-full rounded-full bg-teal-500 translate-x-3 checked:-translate-x-3 transition-all cursor-pointer border-2 border-white' type="checkbox" name="theme" id="theme" />
                </div>
                <img className='w-5' src={light} alt="light" />
            </div>
        </header>
    );
};

export default Header;