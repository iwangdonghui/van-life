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
                to="/host"
                end
                style={({isActive}) => isActive ? hostActiveStyle : null}
                >Dashboard</NavLink>
                <NavLink 
                to="/host/income"
                style={({isActive}) => isActive ? hostActiveStyle : null}
                >Income</NavLink>
                <NavLink 
                to="/host/reviews"
                style={({isActive}) => isActive ? hostActiveStyle : null}
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}