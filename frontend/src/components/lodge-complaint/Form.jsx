import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Lodge a Complaint</h1>
      <form>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Complaint Title</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Complaint Title"
            />

            <label className="form-label">Complaint Description</label>
            <textarea
              className="form-control mb-3"
              rows="6"
              placeholder="Describe your complaint"
            ></textarea>
          </div>

          {/* Right Column */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Complaint Type</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Complaint"
            />

            <label className="form-label">Location</label>
            <select className="form-select mb-3">
              <option>Select location</option>
              <option>Gorakhpur</option>
              <option>Lucknow</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
            </select>

            <label className="form-label">Upload Photo/Video</label>
            <input type="file" className="form-control mb-3" />
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg mb-3">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
