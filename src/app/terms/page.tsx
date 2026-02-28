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

  a {
    color: #e54b1f;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
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

export default function TermsPage() {
  return (
    <Wrapper>
      {/* Header Section */}
      <HeaderSection>
        <HeaderTitle>TERMS & CONDITIONS</HeaderTitle>
      </HeaderSection>

      {/* Content Section */}
      <ContentWrapper>
        <Paragraph>
          Welcome to <BrandHighlight>OTITO MEDIA PRIVATE LIMITED.</BrandHighlight> (“Platform,” “we,” “our,” or “us”).
        </Paragraph>
        <Paragraph>
          These Terms and Conditions (“Terms”) govern your access to and use of our website, applications, APIs, data feeds, and related services (collectively, the “Services”).
        </Paragraph>
        <Paragraph>
          By accessing or using the Services, you agree to be legally bound by these Terms. If you do not agree, you must not use the Services.
        </Paragraph>
        <Paragraph>
          (We insist that you spend time reading these Terms and Privacy Policy and let Us know at <a href="mailto:team@otito.in">team@otito.in</a> if you have any questions regarding the same. We will try our best to answer your queries.)
        </Paragraph>

        <SectionTitle>1. Definitions</SectionTitle>
        <Paragraph>
          “Content” means news articles, headlines, summaries, metadata, images, audio, video, datasets, analytics, and other materials made available through the Platform.
        </Paragraph>
        <Paragraph>
          “User” means any individual or entity accessing or using the Services.
        </Paragraph>
        <Paragraph>
          “Subscriber” means a User who has registered for a paid plan.
        </Paragraph>
        <Paragraph>
          “API” means any application programming interface made available by the Platform.
        </Paragraph>

        <SectionTitle>2. Eligibility</SectionTitle>
        <Paragraph>
          You must be at least 18 years old and legally capable of entering into binding contracts to use the Services.
        </Paragraph>
        <Paragraph>
          If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
        </Paragraph>

        <SectionTitle>3. YOUR APPROVAL</SectionTitle>
        <Paragraph>1. You approve of and accept the Agreement by:</Paragraph>
        <List>
          <li>(a) downloading and/or installing the App on Your device; or</li>
          <li>(b) accessing or using the App or any of the content available within the App from any device.</li>
        </List>
        <Paragraph>2. You can accept the Agreement only if:</Paragraph>
        <List>
          <li>(a) You are a natural person of the legal age to consent in your jurisdiction and of sound mind to form a binding contract with OTITO pursuant to Your use of the App; or</li>
          <li>(b) You are a juristic Person, lawfully existing that has all the authorizations, permits and allowances to enter into this Agreement and form a binding contract; and</li>
          <li>(c) You are not legally barred under applicable laws from using the App.</li>
        </List>
        <Paragraph>
          3. You understand that We want You to not use the App if You do not understand, approve of or accept Agreement in their entirety. Hence, You are requested to read these Terms and Privacy Policy carefully and understand the Agreement before You accept it and agree to be bound by them.
        </Paragraph>

        <SectionTitle>4. ACCOUNT REGISTRATION</SectionTitle>
        <Paragraph>To access certain features, you may be required to create an account. You agree to:</Paragraph>
        <List>
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of your login credentials</li>
          <li>Promptly update any information that changes</li>
          <li>Notify us immediately of unauthorized access</li>
        </List>
        <Paragraph>You are responsible for all activity occurring under your account.</Paragraph>

        <SectionTitle>5. PROVISION/FUNCTIONING</SectionTitle>
        <Paragraph>
          The App is designed to provide You an in-app browsing experience through an embedded browser. The App summarizes third party content within one platform for easy access by You and for assisting You to find corresponding content of Your interest.
        </Paragraph>
        <Paragraph>
          When you read a summary, you will be provided with a link to one of the online sources of such summary. If You chose to access such a link, you acknowledge and accept that you are leaving the App and We shall have no liability, obligation or responsibility for any data breaches or damages arising herewith from Your use of such online sources on third party sites. You agree and acknowledge that OTITO is only an intermediary and that the App does not provide any content of its own accord and is not responsible or liable for the content or accuracy of the summary of content that may be accessed by You through the App.
        </Paragraph>
        <Paragraph>We are not responsible or liable for the content or accuracy of such links.</Paragraph>

        <SectionTitle>6. LICENSE AND PERMITTED USE</SectionTitle>
        <Paragraph>Subject to compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:</Paragraph>
        <List>
          <li>Access and use the Platform</li>
          <li>Retrieve Content via website interface or API</li>
          <li>Use Content internally for analysis, research, or editorial purposes</li>
        </List>
        <Paragraph>Unless expressly permitted in writing, you may not:</Paragraph>
        <List>
          <li>Redistribute, resell, sublicense, or commercially exploit the Content</li>
          <li>Create derivative databases</li>
          <li>Remove copyright or attribution notices</li>
          <li>Use automated scraping tools outside approved API access</li>
          <li>Use the Content for unlawful or misleading purposes</li>
        </List>

        <SectionTitle>7. INTELLECTUAL PROPERTY</SectionTitle>
        <Paragraph>All rights, title, and interest in the Platform and Content remain with:</Paragraph>
        <List>
          <li>The Platform</li>
          <li>Its licensors</li>
          <li>Third-party content providers</li>
        </List>
        <Paragraph>No ownership rights are transferred to you.</Paragraph>
        <Paragraph>All trademarks, logos, and branding elements remain our exclusive property or that of our licensors.</Paragraph>

        <SectionTitle>8. DATA ACCURACY AND DISCLAIMER</SectionTitle>
        <Paragraph>The Platform aggregates news and data from various sources. While we strive for accuracy:</Paragraph>
        <List>
          <li>We do not guarantee completeness, accuracy, or timeliness</li>
          <li>Content may contain errors or omissions</li>
          <li>We are not responsible for decisions made based on the Content</li>
        </List>
        <Paragraph>The Services are provided “AS IS” and “AS AVAILABLE.”</Paragraph>

        <SectionTitle>9. SUSPENSION AND TERMINATION</SectionTitle>
        <Paragraph>We may suspend or terminate your access:</Paragraph>
        <List>
          <li>For violation of these Terms</li>
          <li>For non-payment</li>
          <li>If required by law</li>
          <li>To protect system security or integrity</li>
        </List>
        <Paragraph>Upon termination, your license to use the Services immediately ceases.</Paragraph>

        <SectionTitle>10. REPORTING VIOLATIONS AND CONTENT TAKEDOWN</SectionTitle>
        <Paragraph>
          You can report any violation of these Terms by writing to Faiz Abbas, Grievance Officer at <a href="mailto:team@otito.in">team@otito.in</a> and we will endeavour to address Your concern within 15 days.
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
}
