import React, {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const App = () => {

    const [theme, setTheme] = useState("")

    function changeTheme() {
        if (localStorage.getItem('theme') === 'dark-theme') {
            localStorage.setItem('theme', 'light-theme')
            setTheme("light-theme")
        } else {
            localStorage.setItem('theme', 'dark-theme')
            setTheme("dark-theme")
        }
    }

    useEffect(() => {
        const defaultTheme = localStorage.getItem('theme')
        if (defaultTheme) {
            setTheme(localStorage.getItem('theme'))
        } else {
            localStorage.setItem('theme', 'dark-theme')
        }
    }, [])

    return (<div className={theme}>

        <Header
            theme={theme}
            changeTheme={changeTheme}/>
        <MainContent/>
        <Footer/>

    </div>);
}

export default App