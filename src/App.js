import React, {useState} from 'react'
import './App.css'
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const App = () => {

    const [darkTheme, setDarkTheme] = useState(true)

    function changeTheme() {
        setDarkTheme(prevState => !prevState)
    }

    return (<div className={darkTheme ? 'dark-theme' : "light-theme"}>
        <button onClick={changeTheme}>Change Theme</button>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>);
}

export default App