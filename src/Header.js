import logo from "./logo.svg";
import React from "react";

export default function Header() {
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

        </nav>
    </header>)
}