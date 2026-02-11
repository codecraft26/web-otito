"use client";
import React from "react";
import styled from "styled-components";
import type { Ad } from "../services/api";

type Props = {
  ad: Ad;
};

export default function AdBanner({ ad }: Props) {
  if (!ad.imageUrl) return null;

  return (
    <BannerWrapper>
      <BannerLink
        href={ad.link || "#"}
        target={ad.link ? "_blank" : undefined}
        rel="noopener noreferrer sponsored"
      >
        <BannerImage src={ad.imageUrl} alt={ad.title || "Advertisement"} />
      </BannerLink>
      <AdLabel>Ad</AdLabel>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 12px 0;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
`;

const BannerLink = styled.a`
  display: block;
  width: 100%;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 280px;

  @media (max-width: 768px) {
    max-height: 200px;
  }
`;

const AdLabel = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
