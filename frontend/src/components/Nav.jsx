import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";

export default function Nav() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="SmartSamadhan Logo"
            width="60"
            className="me-2"
          />
          SmartSamadhan
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {t("home")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/lodge">
                {t("lodge")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/track">
                {t("track")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {t("about")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {t("contact")}
              </Link>
            </li>

            {/* 🌍 Language Toggle */}
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0 d-flex align-items-center justify-content-center">
              <span className="me-2 fw-semibold">
                {i18n.language === "en" ? "EN" : "HI"}
              </span>

              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="languageSwitch"
                  onChange={toggleLanguage}
                  checked={i18n.language === "hi"}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
