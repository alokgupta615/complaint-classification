import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About01 = () => {
  return (
    <div className="container my-5" style={{ minHeight: "70vh" }}>
      <div className="text-center mb-4">
        <h1 className="fw-bold">About SmartSamadhan</h1>
        <p className="text-muted">
          Smart Municipal Complaint Classification & Management System
        </p>
      </div>

      <div className="card shadow p-4">
        {/* Introduction */}
        <p>
          SmartSamadhan is an intelligent municipal complaint classification and
          management system designed to simplify and accelerate the grievance
          redressal process. The platform empowers citizens to report civic
          issues quickly and efficiently while ensuring timely resolution by the
          concerned municipal departments.
        </p>

        <p>
          The system supports complaints related to sanitation, water supply,
          road damage, street lighting, waste management, drainage problems, and
          other public infrastructure concerns.
        </p>

        <hr />

        {/* Key Features */}
        <h4 className="mt-3">Key Features</h4>
        <ul>
          <li>Easy and user-friendly complaint registration</li>
          <li>Automatic complaint categorization using smart logic</li>
          <li>Real-time complaint tracking with status updates</li>
          <li>Department-wise complaint routing</li>
          <li>Transparent and accountable grievance handling</li>
          <li>Secure and responsive web-based interface</li>
        </ul>

        <hr />

        {/* How It Works */}
        <h4 className="mt-3">How It Works</h4>
        <ol>
          <li>Citizens submit complaints through the online portal.</li>
          <li>The system automatically classifies the complaint.</li>
          <li>The complaint is routed to the appropriate department.</li>
          <li>Authorities update the status after review and resolution.</li>
          <li>Citizens can track progress in real-time.</li>
        </ol>

        <hr />

        {/* Mission & Vision */}
        <h4 className="mt-3">Our Mission</h4>
        <p>
          To enhance communication between citizens and municipal authorities by
          providing a transparent, efficient, and technology-driven grievance
          redressal platform.
        </p>

        <h4 className="mt-3">Our Vision</h4>
        <p>
          To build smarter cities by leveraging digital innovation for improved
          public service delivery and urban governance.
        </p>
      </div>
    </div>
  );
};

export default About01;
