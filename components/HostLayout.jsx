import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout () {
    const hostActiveStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                to="."
                end
                style={({isActive}) => isActive ? hostActiveStyle : null}
                >
                Dashboard
                </NavLink>
                <NavLink 
                to="income"
                style={({isActive}) => isActive ? hostActiveStyle : null}
                >
                Income
                </NavLink>
                <NavLink 
                to="vans"
                style={({isActive}) => isActive ? hostActiveStyle : null}
                >
                Vans
                </NavLink>

                <NavLink 
                to="reviews"
                style={({isActive}) => isActive ? hostActiveStyle : null}
                >
                Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}