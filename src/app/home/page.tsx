"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Wrapper,
  Container,
  Section,
  Title,
  Slider,
  Slide,
  ImageWrapper,
  StyledImage,
  Overlay,
  Caption,
  Dots,
  Dot,
  CategoriesWrapper,
  CategoriesHeader,
  CategoriesScroll,
  CategoryButton,
  CategoryIcon,
  CategoryText,
  SeeAllButton,
  CategoriesGrid,
  HeadlinesSection,
  HeadlinesGrid,
  ButtonWrapper,
  ViewMoreButton,
} from "../Styles/HomeStyled";

import NewsCard from "../components/NewsCard";
import { useApiList } from "../hooks/useApi";

type ApiArticle = {
  id?: string | number;
  _id?: string;
  title?: string;
  headline?: string;
  summary?: string;
  description?: string;
  image?: string;
  imageUrl?: string;
  thumbnail?: string;
  category?: string | string[];
  language?: string;
  content?: string;
};

export default function TopTrendingSection() {
  // ----- Trending Slides (fetched: category=top) -----
  type Slide = { id: string | number; image: string; caption: string; category: string };
  const { data: topRaw, loading: slidesLoading, error: slidesError } = useApiList<ApiArticle>(
    "/api/articles",
    { "category[]": ["top"], language: "EN", page: "1", limit: "5" }
  );
  const slides: Slide[] = topRaw.map((a, idx) => {
    const categoryValue = Array.isArray(a.category)
      ? (a.category[0] ?? "Trending")
      : a.category ?? "Trending";
    return {
      id: a.id ?? a._id ?? `top-${idx}`,
      image: a.image ?? a.imageUrl ?? a.thumbnail ?? "/images/demo1.png",
      caption: a.title ?? a.headline ?? "",
      category: categoryValue,
    };
  });

  // ----- Categories -----
  const categories = [
    { name: "India", icon: "/icons/india.png" },
    { name: "Politics", icon: "/icons/politics.png" },
    { name: "World", icon: "/icons/world.png" },
    { name: "Trending", icon: "/icons/trending.png" },
    { name: "Business", icon: "/icons/business.png" },
    { name: "Entertainment", icon: "/icons/entertainment.png" },
    { name: "Crime", icon: "/icons/crime.png" },
    { name: "Tech", icon: "/icons/tech.png" },
    { name: "Health", icon: "/icons/health.png" },
    { name: "Education", icon: "/icons/education.png" },
    { name: "Lifestyle", icon: "/icons/lifestyle.png" },
    { name: "Science", icon: "/icons/science.png" },
    { name: "Weather", icon: "/icons/weather.png" },
    { name: "Tourism", icon: "/icons/tourism.png" },
    { name: "Food", icon: "/icons/food.png" },
  ];

  // ----- Headlines (fetched from API) -----
  const [headlines, setHeadlines] = useState<Array<{
    id: string | number;
    title: string;
    summary?: string;
    expandedText?: string;
    image?: string;
    category?: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // More headlines (separate API with categories filter)
  const [moreApiHeadlines, setMoreApiHeadlines] = useState<Array<{
    id: string | number;
    title: string;
    summary?: string;
    expandedText?: string;
    image?: string;
    category?: string;
  }>>([]);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [errorMore, setErrorMore] = useState<string | null>(null);

  const { data: top10Raw, loading: top10Loading, error: top10Error } = useApiList<ApiArticle>(
    "/api/articles",
    { page: "1", limit: "10", language: "EN" }
  );
  useEffect(() => {
    setIsLoading(top10Loading);
    setError(top10Error ?? null);
    const mapped = top10Raw.map((a, idx) => ({
      id: a.id ?? a._id ?? `${idx}`,
      title: a.title ?? a.headline ?? "Untitled",
      summary: a.summary ?? a.description ?? undefined,
      expandedText: a.content ?? a.description ?? undefined,
      image: a.image ?? a.imageUrl ?? a.thumbnail ?? undefined,
      category: Array.isArray(a.category) ? a.category[0] : a.category ?? "All",
    }));
    setHeadlines(mapped);
  }, [top10Raw, top10Loading, top10Error]);

  const { data: moreRaw, loading: moreLoading, error: moreErr } = useApiList<ApiArticle>(
    "/api/articles",
    { "category[]": ["crime", "technology"], language: "EN", page: "1", limit: "10" }
  );
  useEffect(() => {
    setIsLoadingMore(moreLoading);
    setErrorMore(moreErr ?? null);
    const mapped = moreRaw.map((a, idx) => ({
      id: a.id ?? a._id ?? `more-${idx}`,
      title: a.title ?? a.headline ?? "Untitled",
      summary: a.summary ?? a.description ?? undefined,
      expandedText: a.content ?? a.description ?? undefined,
      image: a.image ?? a.imageUrl ?? a.thumbnail ?? undefined,
      category: Array.isArray(a.category) ? a.category[0] : a.category ?? "All",
    }));
    setMoreApiHeadlines(mapped);
  }, [moreRaw, moreLoading, moreErr]);

  // ----- States -----
  const [current, setCurrent] = useState(0);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllHeadlines, setShowAllHeadlines] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic
  const filteredSlides =
    selectedCategory === "All" ? slides : slides.filter((s) => s.category === selectedCategory);

  // Auto-slide trending section
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % filteredSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [filteredSlides.length]);

  const filteredHeadlines =
    selectedCategory === "All"
      ? headlines
      : headlines.filter((h) => h.category === selectedCategory);

  const topHeadlines = filteredHeadlines.slice(0, 10);
  const filteredMore = selectedCategory === "All"
    ? moreApiHeadlines
    : moreApiHeadlines.filter((h) => h.category === selectedCategory);
  const moreHeadlines = showAllHeadlines ? filteredMore : filteredMore.slice(0, 6);

  return (
    <Wrapper>
      <Container>
        {/* ---- TOP TRENDINGS ---- */}
        <Section id="top-trendings">
          <Title>TOP TRENDINGS</Title>
          <Slider>
            {slidesLoading ? (
              <p style={{ textAlign: "center", color: "#999" }}>Loading...</p>
            ) : slidesError ? (
              <p style={{ textAlign: "center", color: "#c00" }}>{slidesError}</p>
            ) : filteredSlides.length > 0 ? (
              filteredSlides.map((slide, index) => (
                <Slide key={slide.id} $active={index === current}>
                  <ImageWrapper>
                    <StyledImage src={slide.image} alt={slide.caption} fill priority />
                    <Overlay />
                    <Caption>{slide.caption}</Caption>
                  </ImageWrapper>
                </Slide>
              ))
            ) : (
              <p style={{ textAlign: "center", color: "#999" }}>
                No trending news available for {selectedCategory}.
              </p>
            )}
          </Slider>

          <Dots>
            {filteredSlides.map((_, index) => (
              <Dot key={index} $active={index === current} />
            ))}
          </Dots>
        </Section>

        {/* ---- CATEGORIES ---- */}
        <Section id="categories">
          <CategoriesWrapper>
            <CategoriesHeader>
              <Title>CATEGORIES</Title>
              <SeeAllButton onClick={() => setShowAllCategories(!showAllCategories)}>
                {showAllCategories ? "Close" : "See All"}
              </SeeAllButton>
            </CategoriesHeader>

            {!showAllCategories ? (
              <CategoriesScroll>
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    style={{
                      border:
                        selectedCategory === cat.name
                          ? "2px solid #c75b27"
                          : "2px solid transparent",
                    }}
                  >
                    <CategoryIcon>
                      <Image src={cat.icon} alt={cat.name} width={60} height={60} />
                    </CategoryIcon>
                    <CategoryText>{cat.name}</CategoryText>
                  </CategoryButton>
                ))}
              </CategoriesScroll>
            ) : (
              <CategoriesGrid>
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    style={{
                      border:
                        selectedCategory === cat.name
                          ? "2px solid #c75b27"
                          : "2px solid transparent",
                    }}
                  >
                    <CategoryIcon>
                      <Image src={cat.icon} alt={cat.name} width={60} height={60} />
                    </CategoryIcon>
                    <CategoryText>{cat.name}</CategoryText>
                  </CategoryButton>
                ))}
              </CategoriesGrid>
            )}
          </CategoriesWrapper>
        </Section>

        {/* ---- TOP 10 HEADLINES ---- */}
        <Section id="top-10-headlines">
          <HeadlinesSection>
            <Title>
              TOP <span>10</span> HEADLINES
            </Title>
            <HeadlinesGrid>
              {isLoading ? (
                <p style={{ textAlign: "center", color: "#999" }}>Loading...</p>
              ) : error ? (
                <p style={{ textAlign: "center", color: "#c00" }}>{error}</p>
              ) : topHeadlines.length > 0 ? (
                topHeadlines.map((news, index) => (
                  <NewsCard
                    key={news.id}
                    news={news}
                    rank={index + 1}
                    showRank={true}
                  />
                ))
              ) : (
                <p style={{ textAlign: "center", color: "#999" }}>
                  No headlines available for {selectedCategory}.
                </p>
              )}
            </HeadlinesGrid>
          </HeadlinesSection>
        </Section>

        {/* ---- MORE HEADLINES ---- */}
        <Section id="more-headlines">
          <HeadlinesSection>
            <Title>MORE HEADLINES</Title>

            <HeadlinesGrid>
              {isLoadingMore ? (
                <p style={{ textAlign: "center", color: "#999" }}>Loading...</p>
              ) : errorMore ? (
                <p style={{ textAlign: "center", color: "#c00" }}>{errorMore}</p>
              ) : moreHeadlines.length > 0 ? (
                moreHeadlines.map((news, index) => (
                  <NewsCard key={news.id} news={news} rank={index + 1} />
                ))
              ) : (
                <p style={{ textAlign: "center", color: "#999" }}>
                  No more headlines for {selectedCategory}.
                </p>
              )}
            </HeadlinesGrid>

            {!showAllHeadlines && filteredMore.length > 6 && (
              <ButtonWrapper>
                <ViewMoreButton onClick={() => setShowAllHeadlines(true)}>
                  View More
                </ViewMoreButton>
              </ButtonWrapper>
            )}
          </HeadlinesSection>
        </Section>
      </Container>
    </Wrapper>
  );
}
