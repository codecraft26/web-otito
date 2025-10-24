"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterNav>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/features">About</StyledLink>
          <StyledLink href="/#more-headlines">News</StyledLink>
          <StyledLink href="/terms">Terms & Conditions</StyledLink>
          <StyledLink href="/privacy-policy">Privacy Policy</StyledLink>
        </FooterNav>

        <LogoWrapper>
          <Image
            src="/f-otito.png"
            alt="Otito Logo"
            width={130}
            height={60}
            priority
          />
        </LogoWrapper>

        <FooterText>
          Lorem ipsum dolor sit amet, consectetur do adipiscing elit, sed do
          emod tempor incid labore et dolore magna aliqua.
        </FooterText>

        <SocialIcons>
          <IconWrapper as="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} color="white" />
          </IconWrapper>
          <IconWrapper as="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={18} color="white" />
          </IconWrapper>
          <IconWrapper as="a" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={18} color="white" />
          </IconWrapper>
          <IconWrapper as="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={18} color="white" />
          </IconWrapper>
        </SocialIcons>
      </FooterTop>

      <FooterBottom>
        © 2025 Otito All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #E75113;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-poppins), sans-serif;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5rem 1rem 2.5rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 3rem 1rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem 1rem;
  }
`;

const FooterNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    gap: 2rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.05rem;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:first-child {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LogoWrapper = styled.div`
  margin: 1.8rem 0 1.3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 1.5rem 0 1rem;
  }

  @media (max-width: 480px) {
    margin: 1rem 0 0.8rem;
  }
`;

const FooterText = styled.p`
  max-width: 700px;
  font-size: 1rem;
  line-height: 1.8;
  color: #fff;
  opacity: 0.9;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    max-width: 600px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const IconWrapper = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  background-color: #fff;
  color: #666;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 400;
  padding: 1rem 0;
  border-top: 1px solid #eaeaea;

  span {
    font-weight: 600;
    color: #555;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.8rem 0;
  }
`;
