import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mb-3">
            <h5>{t("footerAbout")}</h5>
            <p>{t("footerAboutText")}</p>
          </div>

          <div className="col-md-3 mb-3">
            <h5>{t("quickLinks")}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  {t("services")}
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>{t("contact")}</h5>
            <p>Email: support@municipalservices.com</p>
            <p>Phone: +91 8957793436</p>
          </div>

          <div className="col-md-3 mb-3">
            <h5>{t("followUs")}</h5>
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
            © {new Date().getFullYear()} SmartSamadhan. {t("rights")}
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
