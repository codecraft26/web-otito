"use client";

import React, { useState } from "react";
import styled from "styled-components";

const PREFERRED_MODES = ["Email", "Phone", "WhatsApp"];
const LANGUAGES = ["Hindi", "English"];
const LOCATIONS = [
  "news_feed",
  "swipe",
  "photo_story",
  "trending",
  "headlines",
  "video_story",
  "other_headlines",
];

export default function AdvertisePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    preferredMode: "",
    language: "",
    location: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.contact || !form.preferredMode) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/advertise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", contact: "", preferredMode: "", language: "", location: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg((err as Error).message || "Failed to submit. Please try again.");
    }
  };

  return (
    <PageWrapper>
      <Card>
        <Heading>Advertise With Us</Heading>
        <Subtext>
          Reach millions of readers across India. Fill in your details and our team will get back to you within 1–2 business days.
        </Subtext>

        {status === "success" ? (
          <SuccessBox>
            <SuccessIcon>✓</SuccessIcon>
            <SuccessTitle>Enquiry Submitted!</SuccessTitle>
            <SuccessMsg>
              Thank you for your interest. We&apos;ve sent a confirmation to your email and will reach out to you shortly.
            </SuccessMsg>
            <RetryBtn onClick={() => setStatus("idle")}>Submit Another</RetryBtn>
          </SuccessBox>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="contact">Contact Number *</Label>
              <Input
                id="contact"
                name="contact"
                type="tel"
                placeholder="+91 00000 00000"
                value={form.contact}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="preferredMode">Preferred Mode of Communication *</Label>
              <Select
                id="preferredMode"
                name="preferredMode"
                value={form.preferredMode}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a mode</option>
                {PREFERRED_MODES.map((mode) => (
                  <option key={mode} value={mode}>{mode}</option>
                ))}
              </Select>
            </Field>

            <Field>
              <Label htmlFor="language">Language</Label>
              <Select
                id="language"
                name="language"
                value={form.language}
                onChange={handleChange}
              >
                <option value="" disabled>Select a language</option>
                {LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </Select>
            </Field>

            <Field>
              <Label htmlFor="location">Ad Placement Location</Label>
              <Select
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
              >
                <option value="" disabled>Select a location</option>
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </Select>
            </Field>

            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

            <SubmitBtn type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting…" : "Submit Enquiry"}
            </SubmitBtn>
          </Form>
        )}
      </Card>
    </PageWrapper>
  );
}

// ---- Styled Components ----

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 16px 60px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 48px 40px;
  width: 100%;
  max-width: 520px;

  @media (max-width: 600px) {
    padding: 32px 20px;
  }
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #e75113;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
`;

const Subtext = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
`;

const inputBase = `
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: "Poppins", sans-serif;
  color: #222;
  background: #fafafa;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    border-color: #e75113;
    background: #fff;
  }
`;

const Input = styled.input`${inputBase}`;

const Select = styled.select`
  ${inputBase}
  cursor: pointer;
`;

const ErrorMsg = styled.p`
  color: #c00;
  font-size: 0.88rem;
  margin: 0;
`;

const SubmitBtn = styled.button`
  background: #e75113;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #c94a0f;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px 0;
  gap: 12px;
`;

const SuccessIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #e75113;
  color: #fff;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SuccessTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
`;

const SuccessMsg = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 360px;
`;

const RetryBtn = styled.button`
  background: none;
  border: 1.5px solid #e75113;
  color: #e75113;
  border-radius: 8px;
  padding: 8px 24px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background: #fff5f2;
  }
`;
