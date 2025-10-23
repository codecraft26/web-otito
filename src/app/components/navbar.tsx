"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBar>
      <TopRow>
        <LogoWrapper>
          <Link href="/">
            <Image
              src="/otito.png"
              alt="Otito Logo"
              width={140}
              height={70}
              priority
            />
          </Link>
        </LogoWrapper>

        <RightControls>
          {/* Mobile search icon */}
          <MobileSearch>
            <Search size={20} strokeWidth={1.8} />
          </MobileSearch>

          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </Hamburger>
        </RightControls>
      </TopRow>

      <NavLinksWrapper $menuOpen={menuOpen}>
        <NavLinks $menuOpen={menuOpen}>
          <StyledLink href="/">HOME</StyledLink>

          {isHomePage ? (
            <>
              <StyledLink href="/feature">OUR FEATURES</StyledLink>
              <StyledLink href="/#top-trendings">TOP TRENDINGS</StyledLink>
              <StyledLink href="/#categories">CATEGORIES</StyledLink>
              <StyledLink href="/#top-10-headlines">TOP 10 HEADLINES</StyledLink>
              <StyledLink href="/#more-headlines">MORE HEADLINES</StyledLink>
            </>
          ) : (
            <>
              <StyledLink href="/feature">OUR FEATURES</StyledLink>
              <StyledLink href="/#categories">CATEGORIES</StyledLink>
              <StyledLink href="/#top-10-headlines">TOP 10 HEADLINES</StyledLink>
            </>
          )}

          {/* Desktop search icon */}
          <DesktopSearch>
            <Search size={20} strokeWidth={1.8} />
          </DesktopSearch>
        </NavLinks>
      </NavLinksWrapper>

      <BottomLine />
    </NavBar>
  );
}

// ---- Styled Components ----

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
`;

const TopRow = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: center; /* Center logo on desktop */
  position: relative;

  @media (max-width: 900px) {
    padding: 0 20px; /* reduce side padding */
    justify-content: space-between; /* Logo left, controls right */
  }
`;

const LogoWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: flex-start; /* shift logo left on mobile */
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: #000;

  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileSearch = styled.div`
  display: none;
  cursor: pointer;
  color: #292d32;
  transition: color 0.2s ease;

  &:hover svg {
    stroke: #c75b27;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

const DesktopSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #292d32;
  transition: color 0.2s ease;

  &:hover svg {
    stroke: #c75b27;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLinks = styled.div<{ $menuOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem; /* keep fixed gap always */
    padding: 1rem 0;
  }
`;

const NavLinksWrapper = styled.div<{ $menuOpen?: boolean }>`
  width: 100%;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 70px;

  @media (max-width: 900px) {
    padding: 0 20px;
    flex-direction: column;
    width: 100%;
    background: #fff;
    max-height: ${({ $menuOpen }) => ($menuOpen ? "600px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;


const StyledLink = styled(Link)`
  font-size: 17px;
  font-weight: 500;
  color: #000;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #c75b27;
  }
`;

const BottomLine = styled.div`
  width: 90%;
  max-width: 1600px;
  height: 1px;
  background-color: #dcdcdc;
  margin-top: 0.8rem;
`;
