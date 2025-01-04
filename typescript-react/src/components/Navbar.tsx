import React from 'react';
import { Link } from 'react-router-dom';
const Navbar:React.FC = () => {
    return (
        <>
            <nav className="sticky-top navbar navbar-expand-lg bg-primary bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Typescript React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/funprops'}>Fun Props/State</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/classprops'}>Class Props/State</Link>
                            </li>
                                
                            <li className="nav-item">
                                <Link className="nav-link" to="funevents">Fun Event</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="funargu">Event+Argu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="formhandling">Forms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="authlogin">Condition Rendering</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="looping">Looping</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="FetchApi">FetchApi</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;