import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className={`nav-link active`} aria-current="page" to="/">Home</Link>
                            <Link className={`nav-link`} aria-current="page" to="/">Products List</Link>
                            <Link className={`nav-link`} aria-current="page" to="/">Add Products</Link>
                            <Link className={`nav-link`} aria-current="page" to="/">Profile</Link>
                            <Link className={`nav-link`} aria-current="page" to="/signup">SignUp</Link>
                            <Link className={`nav-link`} aria-current="page" to="/">Logout</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;