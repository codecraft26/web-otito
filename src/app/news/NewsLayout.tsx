"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { IoMdThumbsUp, IoMdThumbsDown, IoIosShareAlt } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";

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
    
    content: { heading: string; text: string }[];
  };
}

const NewsLayout: React.FC<NewsLayoutProps> = ({ article }) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % article.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + article.images.length) % article.images.length
    );
  };

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

        {/* Slide Dots */}
        <SlideControls>
          <Dots>
            {article.images.map((_, idx) => (
              <Dot
                key={idx}
                active={idx === currentSlide}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </Dots>
        </SlideControls>

        {/* Like/Share Stats */}
        <Stats>
          <Stat>
            <IoMdThumbsUp />
            <span>{article.likes}</span>
          </Stat>
          <Stat>
            <IoMdThumbsDown />
            <span>{article.dislikes}</span>
          </Stat>
          <Stat>
            <IoIosShareAlt />
            <span>{article.shares}</span>
          </Stat>
        </Stats>
      </ImageWrapper>

      {/* Meta Info */}
      <MetaRow>
        <Meta>{article.date}</Meta>
        <Meta>{article.comments} Comments</Meta>
        <Meta>Category: {article.category}</Meta>
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
        <ThanksSection>Thanks for reading.</ThanksSection>

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

const SlideControls = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dots = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 40px;
  }
`;

const Dot = styled.div<{ active: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#fff" : "#cfcfcf")};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

const Stats = styled.div`
  position: absolute;
  bottom: 20px;
  left: 40px;
  display: flex;
  gap: 1.5rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  align-items: center;

  @media (max-width: 768px) {
    left: 20px;
    font-size: 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    left: 15px;
    bottom: 10px;
    font-size: 0.9rem;
    gap: 0.8rem;
  }
`;

const Stat = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 24px;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 768px) {
    justify-content: flex-start;
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
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 2rem;
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
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
