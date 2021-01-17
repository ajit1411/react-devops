import React from 'react'
import './../../App.css'
import logo from './../../logo.svg'
const Settings = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Settings Page
                </p>
                <p>
                    <a onClick={() => props.history.push({ pathname: '/home' })}>Home</a>
                </p>
            </header>
        </div>
    )
}

export default Settings