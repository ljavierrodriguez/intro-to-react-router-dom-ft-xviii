import React from 'react'

const Home = () => {
    return (
        <section id="home">
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h2>Home this page React</h2>
                        <p className="lead">
                            This is a great place to talk Home your webpage. This template is
                            purposefully unstyled so you can use it as a boilerplate or starting
                            point for you own landing page designs! This template features:
                        </p>
                        <ul>
                            <li>Clickable nav links that smooth scroll to page sections</li>
                            <li>
                                Responsive behavior when clicking nav links perfect for a one page
                                website
                            </li>
                            <li>
                                Bootstrap's scrollspy feature which highlights which section of
                                the page you're on in the navbar
                            </li>
                            <li>
                                Minimal custom CSS so you are free to explore your own unique
                                design options
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home