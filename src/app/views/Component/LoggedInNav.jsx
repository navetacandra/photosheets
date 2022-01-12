import React from 'react'
import {Link} from 'react-router-dom'
import LogOut from '../../controller/LogOut'

function LoggedInNav() {
    const user = JSON.parse(decodeURI((localStorage.getItem('user'))))
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <span className="font-weight-bold">PhotoSheet</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto p-2">
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
            </div>
        </nav>
    )
}

export default LoggedInNav