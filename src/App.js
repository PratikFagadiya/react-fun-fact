import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';

const App = () => {
    return (<div>

        <header>
            <nav>
                <img src={logo} className="App-logo" alt="logo" width={`75px`}/>
            </nav>
        </header>

        <h1>Fun fact about React</h1>

        <ul>
            <li>Was released in 2013</li>
            <li>Was originally created by JORDAN WALKE</li>
            <li>Has well over 100k starts on GitHub</li>
            <li>It is maintained by Facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>

        <footer>
            <small> Thanks for watching</small>
        </footer>

    </div>);
}

export default App