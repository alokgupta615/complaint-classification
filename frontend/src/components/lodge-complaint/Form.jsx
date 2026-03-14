import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">{t("lodgeTitle")}</h1>

      <form>
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-4 mb-3">
            <label className="form-label">{t("name")}</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder={t("name")}
            />
            <label className="form-label">{t("email")}</label>
            <input
              type="email"
              className="form-control mb-3"
              placeholder={t("email")}
            />
            <label className="form-label">{t("complaintTitle")}</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder={t("complaintTitle")}
            />

            <label className="form-label">{t("complaintDescription")}</label>
            <textarea
              className="form-control mb-3"
              rows="6"
              placeholder={t("complaintDescription")}
            ></textarea>
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label">{t("complaintType")}</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder={t("complaintType")}
            />

            <label className="form-label">{t("location")}</label>
            <select className="form-select mb-3">
              <option>{t("gorakhpur")}</option>
              <option>{t("lucknow")}</option>
              <option>{t("delhi")}</option>
              <option>{t("mumbai")}</option>
              <option>{t("hyderabad")}</option>
            </select>

            <label className="form-label">{t("upload")}</label>
            <input type="file" className="form-control mb-3" />
          </div>

          <div className="col-md-2"></div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg mb-3">
            {t("submitBtn")}
          </button>
        </div>
      </form>
    </div>
  );
}
