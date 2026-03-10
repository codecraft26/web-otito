"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function ContactUsPage() {
  const { t } = useLanguage();
  return (
    <div style={{ padding: "200px 24px 60px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 12 }}>{t("contactTitle")}</h1>
      <p style={{ color: "#000", lineHeight: 1.7, marginBottom: 24 }}>
        {t("contactIntro")}
      </p>
      <p style={{ fontWeight: 600, marginBottom: 32, color: "#000" }}>
        {t("contactEmail")} <a href="mailto:otitoofficialnews@gmail.com" style={{ color: "#000", textDecoration: "none" }}>otitoofficialnews@gmail.com</a>
      </p>
      <p style={{ marginBottom: 16, color: "#000" }}>
        {t("contactInstagram")} <a href="https://www.instagram.com/otitonewsofficial" target="_blank" rel="noopener noreferrer" style={{ color: "#000", textDecoration: "none" }}>@otitonewsofficial</a>
      </p>
      <p style={{ marginBottom: 32, color: "#000" }}>
        {t("contactPhone")} +91 70070 73974
      </p>
      <p style={{ color: "#000", fontSize: "0.95rem" }}>
        {t("contactResponse")}
      </p>
    </div>
  );
}


