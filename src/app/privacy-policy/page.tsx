"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 150px 0 0 0;
  color: #000;
  overflow-x: hidden;

    @media (max-width: 480px) {
    padding: 130px 0 0 0;
  }
`;

const HeaderSection = styled.section`
  width: 100%;
  background-color: #F76F1A1A;
  text-align: center;
  padding: 80px 0;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #000;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ContentWrapper = styled.section`
  background-color: #fff;
  max-width: 900px;
  margin: 0 auto;
  padding: 0px 20px 100px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 16px;
`;

const BrandHighlight = styled.span`
  color: #e54b1f;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 15px;
  line-height: 1.7;
  color: #555;
  margin-top: 10px;
`;

export default function PrivacyPolicyPage() {
  return (
    <Wrapper>
      {/* Header Section */}
      <HeaderSection>
        <HeaderTitle>PRIVACY POLICY</HeaderTitle>
      </HeaderSection>

      {/* Content Section */}
      <ContentWrapper>
        <SectionTitle>
          PRIVACY POLICY <BrandHighlight>OTITO</BrandHighlight>
        </SectionTitle>
        <Paragraph>
          At Otito, we respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and safeguard your
          data when you visit our website.
        </Paragraph>

        <SectionTitle>1. INFORMATION WE COLLECT</SectionTitle>
        <Paragraph>When you use our website, we may collect the following information:</Paragraph>
        <List>
          <li>
            <strong>Personal Information:</strong> Name, email address, or contact details
            (only if you sign up for newsletters, comment, or contact us).
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, device information, IP
            address, and pages you visit.
          </li>
          <li>
            <strong>Cookies:</strong> Small files stored on your device to improve user
            experience, track preferences, and deliver relevant ads.
          </li>
        </List>

        <SectionTitle>2. HOW WE USE YOUR INFORMATION</SectionTitle>
        <List>
          <li>Provide access to our news content.</li>
          <li>Send newsletters, alerts, or updates (if you subscribe).</li>
          <li>Improve website performance and user experience.</li>
          <li>
            Personalize ads and analyze traffic through third-party tools (e.g., Google
            Analytics, AdSense).
          </li>
          <li>Respond to inquiries and provide customer support.</li>
        </List>

        <SectionTitle>3. COOKIES & TRACKING TECHNOLOGIES</SectionTitle>
        <List>
          <li>We use cookies to remember your preferences and measure site performance.</li>
          <li>Third-party advertisers may also use cookies to deliver personalized ads.</li>
          <li>You can manage or disable cookies in your browser settings.</li>
        </List>

        <SectionTitle>4. THIRD-PARTY SERVICES</SectionTitle>
        <List>
          <li>We are not responsible for the privacy practices of third-party sites.</li>
          <li>We encourage you to review their privacy policies separately.</li>
        </List>

        <SectionTitle>5. DATA PROTECTION & SECURITY</SectionTitle>
        <List>
          <li>
            We take reasonable measures to protect your information from unauthorized
            access, loss, or misuse.
          </li>
          <li>
            However, no data transmission over the internet can be guaranteed as 100%
            secure.
          </li>
        </List>

        <SectionTitle>6. CHANGES TO TERMS</SectionTitle>
        <Paragraph>
          We may update these Terms at any time. Continued use of the website after changes
          means you accept the revised Terms.
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
}
