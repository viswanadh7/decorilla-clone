import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../static/navbar.css'


function Navbar({ windowScroll }) {
    const [navbar, setNavbar] = useState(false);

    function changeBackground() {
        if (window.scrollY > windowScroll) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={navbar ? "navbar scrolled navbar-expand-lg fixed-top" : "navbar navbar-expand-lg fixed"}>
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" id='navbar_logo'>Decorilla</Link>
                <button onClick={() => { setNavbar(true) }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/pricing' className="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/style' className="nav-link">Style</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href='/dropdown' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><p className="dropdown-item">Action</p></li>
                                <li><p className="dropdown-item">Another action</p></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><p className="dropdown-item">Something else here</p></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="navButton" type="submit">How it works</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
