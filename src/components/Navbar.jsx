// components/Navbar.jsx
import React from "react";

export default function Navbar({ onBookAppointmentClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Unisex Salon
        </a>
        <button
          className="navbar-toggler"
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={onBookAppointmentClick}>
                Book Appointment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
