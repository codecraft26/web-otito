"use client";
import React, { useState } from "react";
import styled from "styled-components";

// ---- Types ----
type News = {
  id: string | number;
  title: string;
  summary?: string;
  image?: string;
  expandedText?: string;
};

type Props = {
  news: News;
  rank?: number;
  showRank?: boolean;
};

// ---- Component ----
export default function NewsCard({ news, rank = 0, showRank = false }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      window.open(`/news/${news.id}`, "_blank");
      setIsExpanded(false);
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardHeader>
        <ImageWrapper>
          <CarImage src={news.image || "/placeholder.png"} alt={news.title} />
          {showRank && (
          <RankBadgeWrapper>
            <SmallArrow />
            <RankBadge>No.{rank}</RankBadge>
          </RankBadgeWrapper>
        )}


        </ImageWrapper>
        <CardText>
          <Title>{news.title}</Title>
          <Description>{news.summary}</Description>
        </CardText>
      </CardHeader>

      {isExpanded && <ExpandedText>{news.expandedText}</ExpandedText>}
    </CardContainer>
  );
}

// ---- Styled Components ----
const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 650px;
  margin: 8px auto;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 120px;
`;

const CarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`;

const RankBadgeWrapper = styled.div`
  border-top-right-radius: 6px; 
  overflow: hidden; 
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

const RankBadge = styled.div`
  background-color: #f15a29;
  color: #fff;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  padding: 4px 16px 4px 28px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  clip-path: polygon(100% 0, 100% 49%, 100% 100%, 0% 100%, 15% 49%, 0 0);
`;

const SmallArrow = styled.div`
  width: 20px;
  height: 26px;
  background-color: #f15a29;
  clip-path: polygon(49% 0, 100% 49%, 49% 100%, 0% 100%, 56% 51%, 0 0);
  transform: translateX(6px);
`;


const CardText = styled.div`
  flex: 1;
  color: #333;
`;

const Title = styled.h3`
  color: #E75113;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 6px;
`;

const Description = styled.p`
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  color: #444;
  line-height: 1.4;
  transition: all 0.3s ease;
`;

const ExpandedText = styled.div`
  font-size: 13px;
  margin-top: 10px;
  color: #444;
  line-height: 1.4;
`;
