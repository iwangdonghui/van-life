import React from "react";
import { Outlet } from "react-router-dom"; // Outlet is similar to the { children } props in child components
import Header from "./Header";
import Footer from "./Footer";

export default function Layout () {
    return (
        <div className="site-wrapper">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
        
    )
}