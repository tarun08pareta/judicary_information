import React from "react";
import img from "../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  let login = false;
  let log = {};
  let userType = "";
  const Navigate = useNavigate();
  if (localStorage.getItem("user")) {
    log = JSON.parse(localStorage.getItem("user"));
    login = log.login;
    userType = log.userType;
  }
  const logout = () => {
    localStorage.clear();
    Navigate("/Login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary text-white">
        <div className="container-fluid">
          <img src={img} alt="not found" className="logo_jis" />
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ms-4">
                <Link
                  to="/"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {login && (
                <>
                  <li className="nav-item ms-4">
                    <Link className="nav-link text-white" to="/pastcases">
                      Past_Cases
                    </Link>
                  </li>
                  {userType === "lawyer" && (
                    <li className="nav-item ms-4">
                      <Link to="/Payment" className="nav-link text-white">
                        Payment
                      </Link>
                    </li>
                  )}
                </>
              )}
              {userType === "registrar" && (
                <>
                  <li className="nav-item ms-4">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">
                        Add
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/registrar/addnewcase"
                          >
                            New Case
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/Signup">
                            New User
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item ms-4">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/registrar/updatecase"
                          >
                            Case
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            User
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item ms-4">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">
                        Schedule
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/registrar/schedulecase">
                             Add
                          </Link>
                        </li>
                        {/* <li>
                          <Link className="dropdown-item" to="#">
                            Assign User
                          </Link>
                        </li> */}
                        <li>
                          <Link className="dropdown-item" to="#">
                            Remove
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </>
              )}
              {login && (
                <li className="nav-item ms-4">
                  <Link
                    to="/About"
                    className="nav-link text-white"
                    href="/About"
                  >
                    About
                  </Link>
                </li>
              )}

              <li className="nav-item ms-4">
                <Link
                  to="/Login"
                  className="nav-link text-white mx-3"
                  onClick={logout}
                >
                  {login ? "Logout" : "Login"}
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link to="/Signup" className="nav-link text-white mx-3">
                  {login ? "" : "Signup"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
