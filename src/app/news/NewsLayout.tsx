"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { useLanguage } from "../contexts/LanguageContext";

interface NewsLayoutProps {
  article: {
    title: string;
    images: string[];
    likes: number;
    dislikes: number;
    shares: number;
    date: string;
    comments: number;
    category: string;
    source?: string;
    content: { heading: string; text: string }[];
  };
}

const NewsLayout: React.FC<NewsLayoutProps> = ({ article }) => {
  const router = useRouter();
  const { t } = useLanguage();
  const [currentSlide] = useState(0);



  return (
    <Container>
      <BackSection>
        <BackButton onClick={() => router.back()}>
          <IoArrowBackOutline />
        </BackButton>
        <Title>{article.title}</Title>
      </BackSection>

      {/* Image Section */}
      <ImageWrapper>
        <Image
          key={currentSlide}
          src={article.images[currentSlide]}
          alt={article.title}
          fill
          style={{ objectFit: "cover", borderRadius: "12px" }}
          priority
        />

      </ImageWrapper>

      {/* Meta Info */}
      <MetaRow>
        {article.date && <Meta>{article.date}</Meta>}
        {article.source && <Meta>Source: {article.source}</Meta>}
      </MetaRow>

      {/* Article Content */}
      <ArticleBody>
        {article.content.map((section, i) => (
          <Section key={i}>
            <Heading>{section.heading}</Heading>
            <Paragraph>{section.text}</Paragraph>
          </Section>
        ))}
      </ArticleBody>

      {/* Footer Section */}
      <BottomRow>
        <ThanksSection>
          <AppPromptText>{t("readOnApp")}</AppPromptText>
          <AppButton href="https://play.google.com/store/apps/details?id=com.otito" target="_blank" rel="noopener noreferrer">
            {t("downloadApp")}
          </AppButton>
        </ThanksSection>

        <ShareRow>
          <ShareText>Share:</ShareText>
          <ShareIcons>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLink />
            </a>
          </ShareIcons>
        </ShareRow>
      </BottomRow>
    </Container>
  );
};

export default NewsLayout;

// ---------------- Styled Components ----------------

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 200px 80px 60px 80px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1200px) {
    padding: 180px 60px 50px 60px;
  }

  @media (max-width: 768px) {
    padding: 150px 30px 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 150px 16px 30px 16px;
  }
`;

const BackSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #111;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.4;
  color: #000;
  max-width: 90%;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  user-select: none;

  @media (max-width: 1024px) {
    aspect-ratio: 4 / 3;
  }

  @media (max-width: 768px) {
    aspect-ratio: 3 / 2;
  }

  @media (max-width: 480px) {
    aspect-ratio: 1 / 1;
  }

  img {
    pointer-events: none;
    user-drag: none;
  }
`;


const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Section = styled.div``;

const Heading = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Paragraph = styled.p`
  color: #444;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ThanksSection = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
  padding: 2rem 0;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1.5rem 0;
  }
`;

const AppPromptText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const AppButton = styled.a`
  display: inline-block;
  background-color: #e54b1f;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background-color: #c73d18;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 22px;
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    gap: 0.6rem;
  }
`;

const Meta = styled.span`
  background: #f7f7f7;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
`;

const ShareRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ShareText = styled.span`
  color: #333;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ShareIcons = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 1.2rem;

  a {
    color: #333;
    transition: all 0.2s ease;
    &:hover {
      color: #e75113;
      transform: scale(1.15);
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
