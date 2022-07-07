import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../../controller/LogOut";

function LoggedInNav() {
  const user = JSON.parse(decodeURI(localStorage.getItem("user")));

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary justify-content-end">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <span className="font-weight-bold">PhotoSheets</span>
          </a>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
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
                <Link className="nav-link" onClick={LogOut} to="#">
                  <span className="font-weight-bold">Log Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start bg-primary navbar-dark"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <a className="navbar-brand" href="/">
            <span className="font-weight-bold">PhotoSheets</span>
          </a>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="container">
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
              <li className="nav-item mb-3 fixed-bottom ms-4">
                <Link className="nav-link" onClick={LogOut} to="#">
                  <span className="font-weight-bold">Log Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoggedInNav;
