import React from "react";
import { useTranslation } from "react-i18next";

const Contact01 = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "60px 20px", maxWidth: "1100px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        {t("contactTitle")}
      </h1>

      <p style={{ textAlign: "center", marginBottom: "40px", color: "#555" }}>
        {t("contactSubtitle")}
      </p>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {/* Contact Info */}
        <div style={{ flex: "1" }}>
          <h3>{t("contactInfo")}</h3>

          <p>
            <strong>{t("email")}:</strong> support@municipalservices.com
          </p>

          <p>
            <strong>{t("phone")}:</strong> +91 8957793436
          </p>

          <p>
            <strong>{t("address")}:</strong> {t("officeAddress")}
          </p>
        </div>

        {/* Contact Form */}
        <div
          style={{
            flex: "1",
            background: "#ffffff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>{t("sendMessage")}</h3>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              placeholder={t("name")}
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />

            <input
              type="email"
              placeholder={t("email")}
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />

            <textarea
              placeholder={t("message")}
              rows="5"
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
                resize: "none",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                padding: "12px",
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#0b5ed7")}
              onMouseOut={(e) => (e.target.style.background = "#0d6efd")}
            >
              {t("sendBtn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact01;
