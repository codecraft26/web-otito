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

export default function PrivacyPolicyPage() {
  return (
    <Wrapper>
      {/* Header Section */}
      <HeaderSection>
        <HeaderTitle>PRIVACY POLICY</HeaderTitle>
      </HeaderSection>

      {/* Content Section */}
      <ContentWrapper>
        <SectionTitle>GENERAL</SectionTitle>
        <Paragraph>
          <BrandHighlight>OTITO MEDIA PRIVATE LIMITED.</BrandHighlight> (“Otito”) is committed to the protection of user provided information.
        </Paragraph>
        <Paragraph>
          You agree that your use of our mobile application (“App”)/website implies your consent to collect, receive, possess, store, dealing or handling of your Personal Information in accordance with the terms of this Privacy Policy (“Privacy Policy”).
        </Paragraph>

        <SectionTitle>ACCESS</SectionTitle>
        <Paragraph>
          Access to the contents available through the App/ website is conditional upon your approval of this Privacy Policy which is in addition to the terms and conditions of use (“Terms”).
        </Paragraph>

        <SectionTitle>INTERPRETATION</SectionTitle>
        <Paragraph>
          Any term used but not defined in this Privacy Policy will have the same meaning as provided in the Terms. You acknowledge that this Privacy Policy, together with our Terms, forms Our agreement with You in relation to your use of the App.
        </Paragraph>

        <SectionTitle>DATA /INFORMATION COLLECTED</SectionTitle>
        <Paragraph>
          While using the app/website we automatically track and collect the following categories of information when you use our services:
        </Paragraph>
        <List>
          <li>IP addresses;</li>
          <li>Domain servers; and</li>
          <li>Other information with respect to Your device, interaction of Your device with the App and applications (collectively "Traffic Data”).</li>
        </List>

        <SectionTitle>Personal Information Collected</SectionTitle>
        <Paragraph>
          In order to provide the App, we may require You to provide Us with Personal Information. Personal Information includes the following categories of information:
        </Paragraph>
        <List>
          <li>Contact data (such as Your e mail address, phone number and any details of Your contacts);</li>
          <li>Device data; and</li>
          <li>Demographic data (such as Your time zone, Your postal address and location details).</li>
        </List>
        <Paragraph>
          If You communicate with Us, by, for example, email or letter, any information provided in such communication may be collected and stored by us.
        </Paragraph>
        <Paragraph>
          Our App may transmit your Personal Information to our internal servers which are situated in India.
        </Paragraph>
        <Paragraph>
          This Personal Information is deleted from our servers 180 days after You delete the App or cancel/terminate your user account on the App, except to the extent storage of such data, including your Personal Information, is necessary for Our purposes and/ or required under applicable laws.
        </Paragraph>

        <SectionTitle>THIRD PARTY LINKS/ SOURCE ATTRIBUTIONS</SectionTitle>
        <Paragraph>
          Our App may contain links to third party websites or applications. The inclusion or exclusion of the link does not imply any endorsement by OTITO of the website, the website's provider, or the information on the website. You agree and understand that privacy policies of these websites are not under Our control.
        </Paragraph>
        <Paragraph>
          OTITO does not make any representations concerning the privacy practices or policies of such third parties or terms of use of such websites, nor does OTITO guarantee the accuracy, integrity, or quality of the information, data, text, software, sound, photographs, graphics, videos, messages or other materials available on such websites.
        </Paragraph>
        <Paragraph>
          OTITO takes the news/data through multiple news aggregators like NEWS DATA I.O etc and doesn’t assure the authenticity/correctness of the said news.
        </Paragraph>
        <Paragraph>
          You understand that once You leave Our servers, use of any information You provide shall be governed by the privacy policy of the operator of the site used by you. Hence, OTITO encourages the User to read the privacy policies of each such website and the User understands that it is solely such a third party who is responsible to the User in this regard.
        </Paragraph>

        <SectionTitle>USAGE OF PERSONAL INFORMATION</SectionTitle>
        <Paragraph>We may use Your Personal Information for the following purposes:</Paragraph>
        <List>
          <li>To build up marketing profiles;</li>
          <li>To aid strategic development, data collection and business analytics;</li>
          <li>To manage our relationship with advertisers and partners;</li>
          <li>To enable us to provide the App through the use of appropriate technological services;</li>
          <li>To audit usage of the App; and</li>
          <li>To enhance user experience in relation to the App (collectively, “Permitted Use”).</li>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
}
