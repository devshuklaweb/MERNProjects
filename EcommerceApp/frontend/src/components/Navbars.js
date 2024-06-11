import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem("user");
    const Logout = () => {
        localStorage.clear();
        navigate("/");
    }
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
                            <Link className={`nav-link`} aria-current="page" to="/listProduct">Products List</Link>
                            <Link className={`nav-link`} aria-current="page" to="/addProduct">Add Products</Link>
                            <Link className={`nav-link`} aria-current="page" to="/">Profile</Link>
                            {
                                auth ? 
                                    <Link className={`nav-link`} onClick={Logout}>Logout</Link> 
                                : 
                                    <>
                                    <Link className={`nav-link`} aria-current="page" to="/login">Login</Link>
                                    <Link className={`nav-link`} aria-current="page" to="/signup">SignUp</Link>
                                    </>
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;