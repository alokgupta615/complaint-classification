import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const About01 = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-5" style={{ minHeight: "70vh" }}>
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">{t("aboutTitle")}</h1>
        <p className="text-muted">{t("aboutSubtitle")}</p>
      </div>

      {/* Intro Section */}
      <div className="card shadow-sm p-4 mb-4">
        <p>{t("intro1")}</p>
        <p>{t("intro2")}</p>
      </div>

      {/* Key Features */}
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="mb-3">{t("keyFeatures")}</h4>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>{t("feature1")}</li>
              <li>{t("feature2")}</li>
              <li>{t("feature3")}</li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul>
              <li>{t("feature4")}</li>
              <li>{t("feature5")}</li>
              <li>{t("feature6")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="mb-3">{t("howItWorks")}</h4>
        <ol>
          <li>{t("step1")}</li>
          <li>{t("step2")}</li>
          <li>{t("step3")}</li>
          <li>{t("step4")}</li>
          <li>{t("step5")}</li>
        </ol>
      </div>

      {/* Mission & Vision */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm p-4 h-100">
            <h4>{t("mission")}</h4>
            <p>{t("missionText")}</p>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow-sm p-4 h-100">
            <h4>{t("vision")}</h4>
            <p>{t("visionText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About01;
