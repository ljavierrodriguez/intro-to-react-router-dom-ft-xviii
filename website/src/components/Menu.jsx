import React from 'react'
import { Link, useLocation } from 'react-router-dom';
 

function Menu() {

    const location = useLocation();

    console.log(location);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
            id="mainNav"
        >
            <div className="container px-4">
                <Link className="navbar-brand" to="/">
                    Start Bootstrap
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={"nav-link " + (location.pathname.includes('/about') ? "active": "")} to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + (location.pathname.includes('/services') ? "active": "")} to="/services">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + (location.pathname.includes('/contact') ? "active": "")} to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://google.cl" target="_blank" rel="noreferrer">
                                Google
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu