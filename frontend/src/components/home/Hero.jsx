import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home/style.css";
import main from "../../assets/image.png";

export default function Hero() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-7">
          <h1 className="p-5">
            Smart complaint <br />
            Classification System
          </h1>
          <p className="pb-5 padding-left">
            a smarter way to resolve municipal <br />
            issues -fast, transparent and efficient
          </p>
        </div>
        <div className="col-4">
          <img src={main} className="image"></img>
        </div>
      </div>
      <div className="col-1"></div>
      <div className="row pb-3">
        <div className="col-3">
          <button className="btn btn-outline-primary w-100">
            SubmitComplaints
          </button>
        </div>
        <div className="col-3 ">
          <button className="btn btn-outline-primary w-100">
            Track Complaints
          </button>
        </div>
      </div>
    </div>
  );
}
