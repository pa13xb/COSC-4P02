import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from '../Login/Login'
import './Navbar.css'

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ CLICKED: !this.state.clicked });
    }

    render() {
        return (
            <Router>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Recipy<i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        {/* hamburger menu icon and x icon when clicked */}
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <Link to={item.url}>
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
                                        </a>
                                    </li>
                                </Link>
                            )
                        })}

                    </ul>
                    <Link to='/Login'>
                        <Button>Login/Sign Up</Button>
                    </Link>


                </nav>
                <div>
                    <Route exact path="/Login" component={Login}></Route>
                    <Route exact path={MenuItems[0].url} render={() => <div>Home</div>}></Route>
                </div>
            </Router>
        )
    }
}

export default Navbar