import React from 'react'

function Header() {
    return (
        <header className="bg-primary bg-gradient text-white">
            <div className="container px-4 text-center">
                <h1 className="fw-bolder">Welcome to Scrolling Nav</h1>
                <p className="lead">
                    A functional Bootstrap 5 boilerplate for one page scrolling websites
                </p>
                <a className="btn btn-lg btn-light" href="#about">
                    Start scrolling!
                </a>
            </div>
        </header>
    )
}

export default Header