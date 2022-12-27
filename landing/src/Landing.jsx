import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './contents/About'
import Contact from './contents/Contact'
import Services from './contents/Services'

const Landing = () => {
    return (
        <>
            {/* Navigation*/}
            <Menu />
            {/* Header*/}
            <Header />
            {/* About section*/}
            <About />
            {/* Services section*/}
            <Services />
            {/* Contact section*/}
            <Contact />
            {/* Footer*/}
            <Footer />
        </>
    )
}

export default Landing