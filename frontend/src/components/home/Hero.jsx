import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home/style.css";
import main from "../../assets/image.png";

export default function Hero() {
  return (
    <div className="container my-4">
      <div className="nav--">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-12 text-lg-start text-center">
            <h1>
              Smart Complaint <br />
              Classification System
            </h1>

            <p className="mt-4">
              A smarter way to resolve municipal issues — fast, transparent and
              efficient.
            </p>

            <div className="row mt-4 justify-content-lg-start justify-content-center">
              <div className="col-lg-5 col-8 mb-3">
                <button className="btn btn-outline-light w-100">
                  Submit Complaints
                </button>
              </div>

              <div className="col-lg-5 col-8 mb-3">
                <button className="btn btn-outline-light w-100">
                  Track Complaints
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 col-12 text-center mt-4 mt-lg-0">
            <img src={main} className="image" alt="Municipal Building" />
          </div>
        </div>
      </div>
    </div>
  );
}
