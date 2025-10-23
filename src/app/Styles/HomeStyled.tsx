"use client";

import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 200px 80px 60px 80px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 200px 60px 50px 60px;
  }

  @media (max-width: 768px) {
    padding: 180px 30px 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 150px 16px 30px 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    background-color: #e75113;
    color: #fff;
    font-weight: 700;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;

    @media (max-width: 480px) {
      width: 24px;
      height: 24px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    gap: 6px;
  }
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 16px;

  @media (max-width: 1024px) {
    height: 260px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const Slide = styled.div<{ $active: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.6s ease;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 16px;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, transparent 80%);
  border-radius: 16px;
`;

export const Caption = styled.p`
  position: absolute;
  bottom: 14px;
  left: 16px;
  right: 16px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;

export const Dot = styled.div<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? "#E35D2D" : "#D3D3D3")};
  transition: background-color 0.3s ease;
`;

// Categories Section
export const CategoriesWrapper = styled.div`
  margin-top: 40px;
`;

export const CategoriesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const SeeAllButton = styled.button`
  background: none;
  border: none;
  color: #e35d2d;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    align-self: flex-end;
  }
`;

export const CategoriesScroll = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(121.25px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 10px;
  }
`;

export const CategoryButton = styled.div`
  width: 120px;
  height: 113px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 95px;
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 85px;
  }
`;

export const CategoryIcon = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryText = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  color: #000;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

// Top 10 Headlines Section
export const HeadlinesSection = styled.section`
  margin-top: 60px;
  width: 100%;
`;

export const HeadlinesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ViewMoreButton = styled.button`
  margin-top: 24px;
  background-color: #e75113;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 40px;
  font-weight: 600;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d94d21;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 32px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 28px;
    font-size: 13px;
  }
`;

export const Section = styled.section`
  scroll-margin-top: 180px;
`;
