import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom"

function Layout(s) {
    return(
        <>
    <Header />
    <div className="pt-24">
    <Outlet />
    </div>
    <Footer />
</>
    )
}
export default Layout