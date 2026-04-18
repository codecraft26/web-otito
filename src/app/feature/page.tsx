"use client";

import styled from "styled-components";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

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

const StyledImageWrapper = styled.div<{ $customWidth?: string; $customHeight?: string }>`
  position: relative;
  width: ${({ $customWidth }) => $customWidth || "577px"};
  height: ${({ $customHeight }) => $customHeight || "363px"};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
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

  .store-img {
    position: relative;
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
  const { t } = useLanguage();

  const sections = [
    {
      title: t("feat1Title"),
      desc: t("feat1Desc"),
      image: "/feature/feature1.png",
      button: t("feat1Btn"),
    },
    {
      title: t("feat2Title"),
      desc: t("feat2Desc"),
      image: "/feature/feature2.png",
      button: t("feat2Btn"),
      customWidth: "500px",
      customHeight: "500px",
    },
    {
      title: t("feat3Title"),
      desc: t("feat3Desc"),
      image: "/feature/feature3.png",
      button: t("feat3Btn"),
    },
    {
      title: t("feat4Title"),
      desc: t("feat4Desc"),
      image: "/feature/feature4.png",
      button: t("feat4Btn"),
    },
    {
      title: t("feat5Title"),
      desc: t("feat5Desc"),
      image: "/feature/feature5.png",
      button: t("feat5Btn"),
    },
    {
      title: t("feat6Title"),
      desc: t("feat6Desc"),
      image: "/feature/feature6.png",
      button: t("feat6Btn"),
    },
    {
      title: t("feat7Title"),
      desc: t("feat7Desc"),
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
              <StyledImageWrapper
                $customWidth={section.customWidth}
                $customHeight={section.customHeight}
              >
                <Image
                  src={section.image}
                  alt={section.title.replace(/<\/?[^>]+(>|$)/g, "")}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </StyledImageWrapper>
            </ImageContainer>
            <Content>
              <Title dangerouslySetInnerHTML={{ __html: section.title }} />
              <Description>{section.desc}</Description>

              {index === sections.length - 1 ? (
                <StoreContainer>
                  <StoreText>{t("featAvailableOn")}</StoreText>
                  <StoreButtons>
                    <div className="store-img">
                      <Image
                        src={section.playStoreImg || ""}
                        alt="Get it on Play Store"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="store-img">
                      <Image
                        src={section.appStoreImg || ""}
                        alt="Download on App Store"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
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
