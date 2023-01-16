import React from 'react'
import logo from './logo.svg';
import './App.css'

const App = () => {
    return (<div>

        <Header/>
        <MainContent/>
        <Footer/>

    </div>);
}

function Header() {
    return (<header>
            <nav className={'nav'}>
                <img
                    src={logo} className="nav-logo" alt="logo"/>

                <ul className={'nav-header-items'}>
                    <li onClick={() => {
                        alert('Pricing Clicked')
                    }}
                    >Pricing
                    </li>
                    <li
                        onClick={() => {
                            alert('About Clicked')
                        }}>About
                    </li>
                    <li onClick={() => {
                        alert('Contact Clicked')
                    }}>Contact
                    </li>
                </ul>
            </nav>
        </header>)
}

function MainContent() {
    return (<div className={'main-content'}>
            <h1>Fun fact about React</h1>

            <ol>
                <li>Was released in 2013</li>
                <li>Was originally created by JORDAN WALKE</li>
                <li>Has well over 100k starts on GitHub</li>
                <li>It is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>)
}

function Footer() {
    return (

        <footer className={'footer'}>
            <small> Thanks for watching</small>
        </footer>

    )
}

export default App