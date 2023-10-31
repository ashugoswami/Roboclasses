import React, { useState } from "react";
import "../styles/navbar.css";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar header navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <div className="navbar-brand mx-2 mt-1" href="#">
            <img
              src="https://cdn-fgbel.nitrocdn.com/iFzAePZASExrqLAhqUdQOBfhHqZYShFU/assets/images/optimized/rev-8696a19/www.roboclasses.com/wp-content/uploads/2021/08/logo.svg"
              alt="icon"
              height={62}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item dropdown mx-3">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-item" href="#">
                      Contact Us
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link " aria-current="page">
                  Homeschooling
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/main" className="nav-link">
                  School/College enquiry
                </Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About us
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-item" href="#">
                      Contact Us
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <Link to="/works" className="nav-link">
                  Contact us
                </Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Existing student
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-item" href="#">
                      Contact Us
                    </div>
                  </li>
                </ul>
              </li>
            </ul>

            <i class="bi bi-search search-icons"></i>
            <button className="btn btn-outline-dark signup-btn mx-3">
              Free Class
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
