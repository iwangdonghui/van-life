import React from "react";
import { Outlet } from "react-router-dom"; // Outlet is similar to the { children } props in child components
import Header from "./Header";
export default function Layout () {
    return (
        <>
          <Header />
          <Outlet />
        </>
        
    )
}