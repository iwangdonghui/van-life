import React from "react";
import { Link, NavLink } from "react-router-dom";

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
            </nav>
      </header>
    )
}