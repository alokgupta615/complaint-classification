import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home/style.css";
import main from "../../assets/image.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="container my-4">
      <div className="nav--">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-12 text-lg-start text-center">
            <h1>{t("heroTitle")}</h1>

            <p className="mt-4">{t("heroSubtitle")}</p>

            <div className="row mt-4 justify-content-lg-start justify-content-center">
              <div className="col-lg-5 col-8 mb-3">
                <button className="btn btn-outline-light w-100">
                  {t("submit")}
                </button>
              </div>

              <div className="col-lg-5 col-8 mb-3">
                <button className="btn btn-outline-light w-100">
                  {t("trackBtn")}
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
