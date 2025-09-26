import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container-fluid bg-light py-3">
      <div className="row text-center">
        <div className="col">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>
        </div>
        <div className="col">
          <Link to="/lodge" className="text-decoration-none">
            Lodge Complaint
          </Link>
        </div>
        <div className="col">
          <Link to="/track" className="text-decoration-none">
            Track Complaint
          </Link>
        </div>
        <div className="col">
          <Link to="/about" className="text-decoration-none">
            About
          </Link>
        </div>
        <div className="col">
          <Link to="/contact" className="text-decoration-none">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
