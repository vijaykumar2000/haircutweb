import React from "react";
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";
import slider3 from "../assets/img/slider3.jpg";
export default function Home() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: "100%" }}
      >
        <div className="carousel-inner" style={{ height: "20rem" }}>
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100 h-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              className="rounded-circle"
              src="https://plus.unsplash.com/premium_photo-1661381025863-4d740c289dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Card image cap"
            />
          </div>
          <div className="col-md-8">
            <div
              className="card"
              style={{ marginLeft: "13rem", border: "none" }}
            >
              <div className="card-body">
                <h5 className="card-title">Experience</h5>
                <br></br>
                <p className="card-text">
                  "Meet Gourishankar Zambre Javed Habib, a seasoned hairstyling
                  expert with 8 years of experience in the industry. With a
                  strong background in renowned salons like Loreal 3 years and
                  Enrich 2 years, Gourishankar brings a wealth of knowledge and
                  skill to the table. Specializing in cutting-edge techniques"
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
