import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <nav className="App-nav">
                            <ul className="App-nav-list">
                                <li><NavLink to="/home" className="App-nav-item" activeClassName="active-header-nav">Home</NavLink></li>
                                <li><NavLink to="/about" className="App-nav-item" activeClassName="active-header-nav">About</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="Main">
                        <div>
                            <Route exact path="/home" component={HomePage}/>
                            <Route exact path="/about" component={AboutPage}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
