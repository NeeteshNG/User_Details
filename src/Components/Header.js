import { Component } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleLogOut = () => {
      this.props.setLoggedIn(false);
      if (this.props.history){
        this.props.history.push('/loginpage');
      }
      else{
        console.error("Having History Error.")
      }
    };

    return (
      <>
        <ul className="nav-links">
          <NavLink to='/'>
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          {!this.props.loggedIn && (
            <NavLink to='/loginpage'>
              <li className="center">
                <a>Login</a>
              </li>
            </NavLink>
          )}
          {this.props.loggedIn && (
            <NavLink to='/loginpage' onClick={handleLogOut}>
              <li className="center">
                <a>Log Out</a>
              </li>
            </NavLink>
          )}
        </ul>
      </>
    );
  }
}

export default Header;