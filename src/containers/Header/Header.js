import React from 'react';
import logo from '../../logoOptions/candle-logo-2.png';
import './Header.css';

// import PropTypes from 'prop-types';

export const Header = () => {

    return (
        <header className="main-header">
            <img src={logo} alt="Daily Ritual logo" className="logo"/>
            <h1> Daily Ritual </h1>
            <div className="login">
            <button> Sign In </button>
            <button> Sign Up </button>
            </div>
        </header>
    )
}

