import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Landing = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Header />
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Landing