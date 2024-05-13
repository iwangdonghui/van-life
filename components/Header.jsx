import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png"

export default function Header () {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
              <NavLink 
              to='/host'
              className={({isActive}) => isActive ? "activeStyle" : null}
              >Host</NavLink>
              <NavLink 
              to="/about"
              className={({isActive}) => isActive ? "activeStyle" : null}
              >About</NavLink>
              <NavLink 
              to="vans"
              className={({isActive}) => isActive ? "activeStyle" : null}
              >Vans</NavLink>
              <Link to="login" className="login-link">
                  <img 
                      src={imageUrl}
                      className="login-icon"
                  />
              </Link>
            </nav>
      </header>
    )
}