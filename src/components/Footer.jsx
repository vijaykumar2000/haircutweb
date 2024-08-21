import React from "react";
import placeholder from "../assets/img/placeholder.png";
export default function Footer() {
  return (
    <footer
      className="footer mt-5"
      style={{
        backgroundColor: "#282725",
        color: "#F2E0DC",
        padding: "2rem",
        borderRadius: "0.3rem",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Salon Address</h3>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> Shop no: 4, Wing-A,
                Silver Oaks Society, 
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> Ananthira Chowk, Anant
                Nagar, Moshi, Pune,
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i> Pimpri-Chinchwad,
                Maharashtra
              </li>
              <li>
                <i className="fas fa-envelope"></i> 412105
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Social Feed</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-google-plus-g"></i> Google Plus
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i> Linked In
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Shop Location</h3>
            <a href="https://maps.app.goo.gl/YBWaf8XbSaSyvxRA7">
              {" "}
              <img
                src={placeholder}
                style={{ width: "5rem", marginTop: "1rem" }}
              ></img>
            </a>
          </div>
          <label style={{ marginLeft: "24rem" }}>
            Click here to see location
          </label>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>© Men Salon 2020 | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
