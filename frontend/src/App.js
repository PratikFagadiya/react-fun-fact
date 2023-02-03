import React, {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import fetchApiResponse from "./APIUtils";

const App = () => {

    const [theme, setTheme] = useState("")
    const [funFactResponse, setFunFactResponse] = useState({
        funList: null, error: false, loading: true
    })

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

        // const funFactAPiResponse = fetchApiResponse('fun-fact')
        // console.log(funFactAPiResponse)

        const getDataFromApi = async () => {
            try {
                const data = await fetchApiResponse('fun-fact')
                if (data) {
                    setFunFactResponse({
                        error: false, loading: false, funList: data.funList
                    })
                    console.log(data)
                }
            } catch (e) {
                setFunFactResponse({
                    error: true, loading: false, funList: null
                })
                console.log(e)
            }

        }
        getDataFromApi();
    }, [])

    console.log(funFactResponse.funList)

    return (<div className={theme}>

        <Header
            theme={theme}
            changeTheme={changeTheme}/>
        <MainContent
            list={funFactResponse.funList}/>
        <Footer/>

    </div>);
}

export default App