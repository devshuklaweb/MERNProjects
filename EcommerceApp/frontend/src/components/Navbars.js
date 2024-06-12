import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem("user");
    const Logout = () => {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{borderRight:'1px solid #504b4b',paddingRight:'22px'}}>Ecommerce Portal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            {
                                auth ?
                                    <>
                                        <li className="nav-item"><Link className={`nav-link active`} aria-current="page" to="/">Home</Link></li>
                                        <li className="nav-item"><Link className={`nav-link`} aria-current="page" to="/listProduct">Products List</Link></li>
                                        <li className="nav-item"><Link className={`nav-link`} aria-current="page" to="/addProduct">Add Products</Link></li>
                                        <li className="nav-item"><Link className={`nav-link`} aria-current="page" to="/">Profile</Link></li>
                                        <li className="nav-item"><Link className={`nav-link`} onClick={Logout}>Logout ({JSON.parse(auth).name})</Link></li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className={`nav-link`} aria-current="page" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link`} aria-current="page" to="/signup">SignUp</Link>
                                        </li>
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