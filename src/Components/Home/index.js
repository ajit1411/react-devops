import React from 'react'
import './../../App.css'
import logo from './../../logo.svg'
const Home = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Home Page
                </p>
                <p>
                    <a onClick={() => props.history.push({ pathname: '/settings' })}>Settings</a>
                </p>
            </header>
        </div>
    )
}

export default Home