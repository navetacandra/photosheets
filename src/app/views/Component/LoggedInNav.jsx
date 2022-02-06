import React from 'react'
import { Link } from 'react-router-dom'
import LogOut from '../../controller/LogOut'

function LoggedInNav() {
    const user = JSON.parse(decodeURI((localStorage.getItem('user'))))

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary justify-content-end">
                <div className="container">
                    {
                        !window.isMobile ? (
                            <>
                                <a className="navbar-brand" href="/">
                                    <span className="font-weight-bold">PhotoSheets</span>
                                </a>
                                <div className="navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">
                                                <span className="font-weight-bold">Home</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/profile">
                                                <span className="font-weight-bold">{user.name}</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={LogOut} to='#'>
                                                <span className="font-weight-bold">Log Out</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <a className="navbar-brand" href="/">
                                    <span className="font-weight-bold">PhotoSheets</span>
                                </a>

                                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div>
                                            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                        </div>
                                        <div className="dropdown mt-3">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                Dropdown button
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default LoggedInNav