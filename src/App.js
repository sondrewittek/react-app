import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
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
                                <li><Link to="/" className="App-nav-item">Home</Link></li>
                                <li><Link to="/about" className="App-nav-item">About</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="Main">
                        <div>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/about" component={AboutPage}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
