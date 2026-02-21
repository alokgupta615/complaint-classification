import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const About01 = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-5" style={{ minHeight: "70vh" }}>
      <div className="text-center mb-4">
        <h1 className="fw-bold">{t("aboutTitle")}</h1>
        <p className="text-muted">{t("aboutSubtitle")}</p>
      </div>

      <div className="card shadow p-4">
        {/* Introduction */}
        <p>{t("intro1")}</p>
        <p>{t("intro2")}</p>

        <hr />

        {/* Key Features */}
        <h4 className="mt-3">{t("keyFeatures")}</h4>
        <ul>
          <li>{t("feature1")}</li>
          <li>{t("feature2")}</li>
          <li>{t("feature3")}</li>
          <li>{t("feature4")}</li>
          <li>{t("feature5")}</li>
          <li>{t("feature6")}</li>
        </ul>

        <hr />

        {/* How It Works */}
        <h4 className="mt-3">{t("howItWorks")}</h4>
        <ol>
          <li>{t("step1")}</li>
          <li>{t("step2")}</li>
          <li>{t("step3")}</li>
          <li>{t("step4")}</li>
          <li>{t("step5")}</li>
        </ol>

        <hr />

        {/* Mission & Vision */}
        <h4 className="mt-3">{t("mission")}</h4>
        <p>{t("missionText")}</p>

        <h4 className="mt-3">{t("vision")}</h4>
        <p>{t("visionText")}</p>
      </div>
    </div>
  );
};

export default About01;
