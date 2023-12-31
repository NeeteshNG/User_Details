import { Component } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const handleLogOut = () => {
      this.props.setLoggedIn(false);
      if (this.props.history) {
        this.props.history.push("/loginpage");
      } else {
        console.error("Having History Error.");
      }
    };

    return (
      <>
        <ul className="nav-links">
          <NavLink to="/">
            <li>
              <div id="a">Home</div>
            </li>
          </NavLink>
          <div className="ul_git">
            <div className="il_git">
              <a
                href="https://github.com/NeeteshNG/MyTaskBestPeers_2"
                rel="noreferrer"
                target="_blank"
                title="Git Repo"
                className="git-click"
              >
                <i className="fab fa-github size_git"></i>
              </a>
            </div>
          </div>
          {!this.props.loggedIn && (
            <NavLink to="/loginpage">
              <li className="center">
                <div id="a">Login</div>
              </li>
            </NavLink>
          )}
          {this.props.loggedIn && (
            <NavLink to="/loginpage" onClick={handleLogOut}>
              <li className="center">
                <div id="a">Log Out</div>
              </li>
            </NavLink>
          )}
        </ul>
      </>
    );
  }
}

export default Header;
