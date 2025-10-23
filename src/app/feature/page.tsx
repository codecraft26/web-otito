"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 150px 0 0 0;

  @media (max-width: 480px) {
    padding: 120px 0 0 0;
  }
`;

const Section = styled.section<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  background: linear-gradient(to bottom, #fff, #fbfbfb);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

const InnerContainer = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  max-width: 90%;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;


const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img<{ $customWidth?: string; $customHeight?: string }>`
  width: ${({ $customWidth }) => $customWidth || "577px"};
  height: ${({ $customHeight }) => $customHeight || "363px"};
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 536px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  gap: 15px;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center; 
    text-align: center;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 1.4;
  color: #000;
  text-transform: uppercase;

  span {
    color: #e54b1f;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.5;
  }
`;

const Button = styled.button`
  background-color: #e54b1f;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 14px 36px;
  cursor: pointer;
  font-size: 16px;
  width: auto;
  align-self: flex-start;
  transition: background 0.3s;

  &:hover {
    background-color: #cf421c;
  }

  @media (max-width: 768px) {
    align-self: center; /* center for mobile */
    padding: 12px 30px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;


const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 1024px) {
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const StoreText = styled.p`
  font-size: 16px;
  color: #000;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const StoreButtons = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 120px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 34px;
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export default function FeaturePage() {
  const sections = [
    {
      title:
        "NEVER MISS A BEAT! EXPLORE OUR NEW FEATURE <span>TOP 10 HEADLINES</span>",
      desc: "Never miss a beat with our new Top 10 Headlines feature. Catch the most important stories of the day, all in one place. Quick, clear, and always up-to-date—stay ahead with every headline.",
      image: "/feature/feature1.png",
      button: "Get the App",
    },
    {
      title: "Discover our new feature<br /><span>Notification Preference.</span>",
      desc: "Discover news tailored to your interests with our brand-new categories. From business and technology to lifestyle and entertainment, explore stories that matter most to you. Stay informed, stay inspired, and experience the news your way.",
      image: "/feature/feature2.png",
      button: "Learn More",
      customWidth: "500px",
      customHeight: "500px",
    },
    {
      title: "Explore our new feature:<br /><span>2-Line News</span>",
      desc: "Discover news tailored to your interests with our brand-new categories. From business and technology to lifestyle and entertainment, explore stories that matter most to you. Stay informed, stay inspired, and experience the news your way.",
      image: "/feature/feature3.png",
      button: "Learn More",
    },
    {
      title:
        "Your news, simplified: Discover the <span>Latest News</span> of the day.",
      desc: "Your news, simplified – get the latest updates at a glance. From top headlines to trending stories, everything you need is in one place. Stay connected with the world, every day, effortlessly.",
      image: "/feature/feature4.png",
      button: "Get the App",
    },
    {
      title: "Headlines at Your Fingertips:<br /><span>Just Swipe</span>",
      desc: "Your news, simplified – get the latest updates at a glance. From top headlines to trending stories, everything you need is in one place. Stay connected with the world, every day, effortlessly.",
      image: "/feature/feature5.png",
      button: "Get the App",
    },
    {
      title: "<span>News in Pictures</span>,<br />Stories in Seconds",
      desc: "Stay updated on the go. Download our mobile app for seamless access to the latest news anytime, anywhere.",
      image: "/feature/feature6.png",
      button: "Download App",
    },
    {
      title: "<span>Download the App Now</span>",
      desc: "Stay updated with the latest news anytime, anywhere.",
      image: "/feature/feature7.png",
      playStoreImg: "/images/playstore.png",
      appStoreImg: "/images/appstore.png",
      customWidth: "493px",
      customHeight: "431px",
    },
  ];

  return (
    <Wrapper>
      {sections.map((section, index) => (
        <Section key={index} $reverse={index % 2 === 1}>
          <InnerContainer $reverse={index % 2 === 1}>
            <ImageContainer>
              <StyledImage
                src={section.image}
                alt={section.title}
                $customWidth={section.customWidth}
                $customHeight={section.customHeight}
              />
            </ImageContainer>
            <Content>
              <Title dangerouslySetInnerHTML={{ __html: section.title }} />
              <Description>{section.desc}</Description>

              {index === sections.length - 1 ? (
                <StoreContainer>
                  <StoreText>Available on</StoreText>
                  <StoreButtons>
                    <img src={section.playStoreImg} alt="Get it on Play Store" />
                    <img src={section.appStoreImg} alt="Download on App Store" />
                  </StoreButtons>
                </StoreContainer>
              ) : (
                <Button>{section.button}</Button>
              )}
            </Content>
          </InnerContainer>
        </Section>
      ))}
    </Wrapper>
  );
}
