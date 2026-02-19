import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mb-3">
            <h5>About Us</h5>
            <p>Helping people of resolve their problem by municipal</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Contact</h5>
            <p>Email: support@municipalservices.com</p>
            <p>Phone: +91 8957793436</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Follow Us</h5>
            <a href="#" className="me-2 text-light">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="me-2 text-light">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-2 text-light">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>
            © {new Date().getFullYear()} Municipal. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
