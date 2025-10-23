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

export default function TermsPage() {
  return (
    <Wrapper>
      {/* Header Section */}
      <HeaderSection>
        <HeaderTitle>TERMS & CONDITIONS</HeaderTitle>
      </HeaderSection>

      {/* Content Section */}
      <ContentWrapper>
        <SectionTitle>
          TERMS & CONDITIONS <BrandHighlight>OTITO</BrandHighlight>
        </SectionTitle>
        <Paragraph>
          Welcome to Otito. By accessing or using our website, you agree to these Terms &
          Conditions. Please read them carefully before using our services.
        </Paragraph>

        <SectionTitle>1. USE OF CONTENT</SectionTitle>
        <List>
          <li>
            All news articles, images, videos, and graphics published on this website are
            protected by copyright.
          </li>
          <li>
            You may read, share, or link to our articles for personal and non-commercial
            purposes.
          </li>
          <li>
            Republishing, reproducing, or redistributing our content without permission is
            strictly prohibited.
          </li>
        </List>

        <SectionTitle>2. USER RESPONSIBILITIES</SectionTitle>
        <List>
          <li>Do not misuse our website for illegal or harmful purposes.</li>
          <li>Do not attempt to disrupt or hack the website.</li>
          <li>
            You are responsible for ensuring that the information you submit (e.g., in
            comments) is accurate and lawful.
          </li>
        </List>

        <SectionTitle>3. COMMENTS & COMMUNITY GUIDELINES</SectionTitle>
        <List>
          <li>Readers may post comments where available.</li>
          <li>Offensive, abusive, defamatory, or spam content will not be tolerated.</li>
          <li>
            We reserve the right to remove any comments and block users who violate these
            rules.
          </li>
        </List>

        <SectionTitle>4. ACCURACY OF INFORMATION</SectionTitle>
        <Paragraph>We strive to provide accurate and timely news. However:</Paragraph>
        <List>
          <li>Some information may change over time (e.g., developing news stories).</li>
          <li>
            We are not responsible for errors, omissions, or delays in content updates.
          </li>
          <li>
            Opinions expressed by authors or contributors are their own and do not
            necessarily reflect the views of Otito.
          </li>
        </List>

        <SectionTitle>5. THIRD-PARTY LINKS</SectionTitle>
        <Paragraph>
          Our website may include links to external sites. We are not responsible for the
          content, accuracy, or privacy practices of these third-party websites.
        </Paragraph>

        <SectionTitle>6. CHANGES TO TERMS</SectionTitle>
        <Paragraph>
          We may update these Terms at any time. Continued use of the website after changes
          means you accept the revised Terms.
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
}
