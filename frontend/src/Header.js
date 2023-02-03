import logo from "./logo.svg";
import React from "react";
import './App.css'

import DarkMode from './night-mode.png'
import LightModel from './light.png'

export default function Header(props) {
    return (<header>
        <nav className={'nav'}>
            <img
                src={logo} className="nav-logo" alt="logo"/>

            <h1>React Fact</h1>

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

            {props.theme === 'dark-theme' ?
                <img src={LightModel} alt={'Light Mode'} onClick={props.changeTheme} width={'35px'}/> :
                <img src={DarkMode} alt={'Dark Mode'} onClick={props.changeTheme} width={'35px'}/>}

        </nav>
    </header>)
}