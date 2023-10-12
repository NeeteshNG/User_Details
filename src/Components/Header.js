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
          <ul class="nav-links">
              <NavLink to='/'><li><a href="#">Home</a></li></NavLink>
              {!loggedIn && (<NavLink to='/loginpage'><li class="center"><a href="#">
                Login
                </a></li></NavLink>)}
              {loggedIn && (<NavLink to='/loginpage' onClick={handleLogOut}><li class="center"><a href="#">
              Log Out
              </a></li></NavLink>)}
          </ul>
      </>
    )
}

export default Header
