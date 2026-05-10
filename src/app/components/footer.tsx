"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <FooterContainer>
      <FooterTop>
        <FooterNav>
          <StyledLink href="/">{t("footerHome")}</StyledLink>
          <StyledLink href="/feature">{t("footerAbout")}</StyledLink>
<StyledLink href="/terms">{t("footerTerms")}</StyledLink>
          <StyledLink href="/privacy">{t("footerPrivacy")}</StyledLink>
          <StyledLink href="/contactus">{t("footerContact")}</StyledLink>
          <StyledLink href="/advertise">{t("footerAdvertise")}</StyledLink>
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

        <FooterText>{t("footerTagline")}</FooterText>

        <FooterAddress>
          <strong>OTITO MEDIA PRIVATE LIMITED</strong><br />
          R-3/201, Shivshadan SOC, Cly Nirlon, Goregaon East,<br />
          Sharma Estate, Goregaon East, Mumbai, Maharashtra – 400063, India<br />
          +91 90764 37932 | team@otito.in
        </FooterAddress>

        <SocialIcons>
          <BrandIcon as="a" href="https://www.instagram.com/otitonewsofficial?igsh=enh1MHcybmlhaTUy" target="_blank" rel="noopener noreferrer" $bg="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)">
            <FaInstagram size={22} color="white" />
          </BrandIcon>
          <BrandIcon as="a" href="https://www.linkedin.com/company/otito-news/" target="_blank" rel="noopener noreferrer" $bg="#0077B5">
            <FaLinkedinIn size={20} color="white" />
          </BrandIcon>
          <BrandIcon as="a" href="https://x.com/Otito_Hindi" target="_blank" rel="noopener noreferrer" $bg="#000000">
            <FaXTwitter size={20} color="white" />
          </BrandIcon>
          <BrandIcon as="a" href="https://www.facebook.com/share/1BV43fSrnJ/" target="_blank" rel="noopener noreferrer" $bg="#1877F2">
            <FaFacebookF size={20} color="white" />
          </BrandIcon>
          <BrandIcon as="a" href="https://youtube.com/@otitonews?si=B1aRhE0MUXBBnTXG" target="_blank" rel="noopener noreferrer" $bg="#FF0000">
            <FaYoutube size={22} color="white" />
          </BrandIcon>
          <StoreBadge href="https://play.google.com/store/apps/details?id=com.otito" target="_blank" rel="noopener noreferrer">
            <Image src="/images/playstore.png" alt="Get it on Play Store" width={120} height={40} style={{ objectFit: "contain" }} />
          </StoreBadge>
          <StoreBadge href="https://apps.apple.com/in/app/otito/id6754835189" target="_blank" rel="noopener noreferrer">
            <Image src="/images/appstore.png" alt="Download on App Store" width={120} height={40} style={{ objectFit: "contain" }} />
          </StoreBadge>
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
  margin: 0.4rem 0 0.4rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 0.3rem 0 0.3rem;
  }

  @media (max-width: 480px) {
    margin: 0.2rem 0 0.2rem;
  }
`;

const FooterAddress = styled.p`
  max-width: 700px;
  font-size: 0.88rem;
  line-height: 1.8;
  color: #fff;
  opacity: 0.85;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.82rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.78rem;
    padding: 0 0.5rem;
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

const BrandIcon = styled.div<{ $bg: string }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px) scale(1.08);
    opacity: 0.9;
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

const StoreBadge = styled.a`
  display: inline-flex;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    opacity: 0.9;
  }
`;
