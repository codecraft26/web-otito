export default function ContactUsPage() {
  return (
    <div style={{ padding: "200px 24px 60px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: 12 }}>Contact Us</h1>
      <p style={{ color: "#000", lineHeight: 1.7, marginBottom: 24 }}>
        For any inquiries, suggestions, or support, reach us at:
      </p>
      <p style={{ fontWeight: 600, marginBottom: 32, color: "#000" }}>
        Email: <a href="mailto:otitoofficialnews@gmail.com" style={{ color: "#000", textDecoration: "none" }}>otitoofficialnews@gmail.com</a>
      </p>
      <p style={{ color: "#000", fontSize: "0.95rem" }}>
        We usually respond within 1–2 business days.
      </p>
    </div>
  );
}


