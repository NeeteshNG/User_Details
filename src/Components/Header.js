import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


function Header({loggedIn, setLoggedIn}) {
    const navigate = useNavigate();

    const handleLogOut = () => {
      setLoggedIn(false);
      navigate('/loginpage')
    }

    return (
      <>
          <ul className="nav-links">
              <NavLink to='/'><li><a href="#">Home</a></li></NavLink>
              {!loggedIn && (<NavLink to='/loginpage'><li className="center"><a href="#">
                Login
                </a></li></NavLink>)}
              {loggedIn && (<NavLink to='/loginpage' onClick={handleLogOut}><li className="center"><a href="#">
              Log Out
              </a></li></NavLink>)}
          </ul>
      </>
    )
}

export default Header
