import { Link, Outlet } from "react-router-dom";
import React from 'react'
import Footer from "./components/Footer";
const Layout = () => {
    return (
        <div >
            <div className="header">
                <nav>
                    <ul>
                        <li>
                            <Link to="">
                                <p>Journey</p>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li><Link to="cart">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </Link></li>
                    </ul>
                </nav>
            </div>

            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout